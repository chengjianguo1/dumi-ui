// import { CSSProperties } from 'react'

export interface PaginationProps {
  /** 每页显示多少条 */
  pageSize?: number;
  /** 默认显示第几页 */
  defaultCurrent?: number;
  /** 总共条数 */
  total: number;
  /** 分页条目最大显示长度 */
  barMaxSize?: number;
  /** 回调函数 */
  onShowSizeChange?: (v: number) => void;
}
