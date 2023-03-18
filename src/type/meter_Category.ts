export interface ListInt {
  id: number,
  lbId: number,
  lbName: string,
  sfId: number,
  sfName: string
}

export interface selectDataInt {
  lbId: number,
  lbName: string,
  sfName: string,
  page: number,
  count: number,
  pagesize: number
}

export class initData {
  selectData: selectDataInt = {
    lbId: 1,
    lbName: "",
    sfName: "",
    page: 1,
    count: 0,
    pagesize: 5
  }
  list: ListInt[]=[]
}