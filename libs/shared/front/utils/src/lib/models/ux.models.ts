
export interface BreadCrumbItem {
  route:string,
  name: string,
  title:string
}

export type BreadCrumbData = Array<BreadCrumbItem>