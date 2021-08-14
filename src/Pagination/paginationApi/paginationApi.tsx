import React from 'react';

export interface IPaginationApi {
  /**
   * @description       每页条数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           10
   */
  pageSize?: number;
  /**
   * @description       默认显示第几页
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           1
   */
  defaultCurrent?: 2;
  /**
   * @description       总共条数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           10
   */
  total: number;
  /**
   * @description       分页条目最大显示长度
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           5
   */
  barMaxSize?: number;
  /**
   * @description       回调函数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           () => {}
   */
  onShowSizeChange?: (v: number) => void;
}

const Pagination: React.FC<IPaginationApi> = () => <></>;

export default Pagination;
