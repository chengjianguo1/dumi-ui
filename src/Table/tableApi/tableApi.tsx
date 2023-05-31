import React from 'react';
import { ColumnType, SourceDataType } from '../table.interface';

export interface ITableApi {
  /**
   * @description        表格数据
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           SourceDataType[]
   */
  data?: SourceDataType[];
  /**
   * @description       表头数据格式，（开启排序配置后，在需要排序的columns中设置排序方法）
   * @description.zh-CN  还支持不同的 locale 后缀来实现多语言描述
   * @default            ColumnType[]
   */
  columns?: ColumnType[];
  /**
   * @description       是否开启排序
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  sorted?: boolean;
  /**
   * @description       是否有分页器
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  pagination?: boolean;
  /**
   * @description       开启页码时才有效，设置每页显示几个，待完成
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           10
   */
  pageSize?: number;
}

const Table: React.FC<ITableApi> = () => <></>;

export default Table;
