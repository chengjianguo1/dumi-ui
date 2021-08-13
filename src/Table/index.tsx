import React, { useMemo, useState } from 'react';
import { TableTable } from './styled';
import { TableProps, ColumnType, SourceDataType } from './table.interface';

const MapData = (data: SourceDataType[], columnData: ColumnType[]) => {
  return data.map((v) => {
    return (
      <tr key={v.key}>
        {columnData.map((value, index) => {
          return (
            <td key={index}>
              <span>
                {value.render
                  ? value.render(v[value.dataIndex], v, value)
                  : v[value.dataIndex]}
              </span>
            </td>
          );
        })}
      </tr>
    );
  });
};

export default (props: TableProps) => {
  const { data, columns, pageSize = 10, pagination } = props;
  const [columnData, setColumnData] = useState<ColumnType[]>([]);
  const [sourceData, setSourceData] = useState<SourceDataType[]>([]);
  const [paginationData, setPaginationData] = useState<SourceDataType[][]>([]);
  const [current, setCurrent] = useState(0); //这个是paginationData的索引
  const originPagination = useMemo(() => {
    return (data: SourceDataType[]) => {
      let tmp: SourceDataType[][] = [];
      let len = data.length;
      let pagenumber = Math.ceil(len / pageSize!); //页数
      for (let i = 0; i < pagenumber; i++) {
        //每页该显示多少内容做好。
        tmp[i] = data.slice(0 + i * pageSize!, pageSize! + i * pageSize!);
      }
      setPaginationData(tmp);
    };
  }, [pageSize]);
  const totalColumn = useMemo(() => {
    //表头总长
    setColumnData(columns); //表头拿来渲染
    return columns.length;
  }, [columns]);
  const totalLen = useMemo(() => {
    //内容部分总长
    setSourceData(data); //数据
    if (pagination) {
      //分页走paginationData
      originPagination(data);
    }
    return data.length;
  }, [data, originPagination, pagination]);
  const renderData = useMemo(() => {
    //内容部分渲染
    let render;
    if (pagination && paginationData.length !== 0) {
      //如果分页，渲染分页
      render = MapData(paginationData[current], columnData);
    } else {
      //否则直接渲染
      render = MapData(sourceData, columnData);
    }
    return render;
  }, [columnData, current, pagination, paginationData, sourceData]);

  return (
    <div>
      <TableTable>
        <thead>
          <tr>
            {columnData.map((v, i) => {
              return (
                <th key={i}>
                  <span>{v.title}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </TableTable>
      {/* {pagination && (
				<Pagination
					style={{ justifyContent: "flex-end" }}
					total={totalLen}
					pageSize={pageSize}
					callback={(v) => setCurrent(v - 1)}
					defaultCurrent={1}
				></Pagination>
			)} */}
    </div>
  );
};
