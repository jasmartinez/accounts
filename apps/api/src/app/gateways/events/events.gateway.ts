import { OnGatewayInit, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { delay, of, repeat, switchMap } from 'rxjs';
import { getRandomInt } from './events.functions';
import { AccountBalanceStatusEnum, AccountEvent, EventTypesEnum, ExchangeRateEvent } from '@accounts/shared-models';

@WebSocketGateway(3300, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    transports: ['websocket', 'polling'],
    credentials: false,
  },
  allowEIO3: true,
})
export class EventsGateway implements OnGatewayInit {
  afterInit() {
    this._setupStreams();
  }
  @WebSocketServer()
  server;

  private _setupStreams() {
    const currentExchangeEvent$ = of(null).pipe(
      switchMap(() => of(getRandomInt(5000, 12000)).pipe(delay(30000))),
      repeat()
    );

    currentExchangeEvent$.subscribe((num) => {
      const event: ExchangeRateEvent = {
        type: EventTypesEnum.ExchangeRate,
        payload: num,
      };
      this.server.emit(event.type,event.payload);
    });
    
    const accountEvent$ = of(null).pipe(
      switchMap(() => {
        const accountId = getRandomInt(0, 7);
        const status = getRandomInt(1, 3);
          const event: AccountEvent = {
            type: EventTypesEnum.Account,
            payload: {
              accountId: `1000${accountId}`,
              status: status === 1 ? AccountBalanceStatusEnum.Decrease: AccountBalanceStatusEnum.Increase,
              amount: getRandomInt(0, 11)
            }
          }
       return of(event).pipe(delay(getRandomInt(20000, 40000)));
      }),
      repeat()
    );

    accountEvent$.subscribe((event:AccountEvent)=>{
      this.server.emit(event.type,event.payload);
    });
  }
}