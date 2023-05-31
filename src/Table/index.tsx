import React, { useMemo, useState } from 'react';
import { TableTable, Sort } from './styled.jsx';
import { Pagination } from 'dumi-ui';
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
  const [sort, setSort] = useState<boolean | null>(null);
  const originPagination = useMemo(() => {
    return (data: SourceDataType[]) => {
      let tmp: SourceDataType[][] = [];
      let len = data.length;
      let pagenumber = Math.ceil(len / pageSize!); //页数
      for (let i = 0; i < pagenumber; i++) {
        // todo
        // 每页该显示多少内容做好。
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
    console.log(sourceData);
    if (pagination && paginationData.length !== 0) {
      //如果分页，渲染分页
      render = MapData(paginationData[current], columnData);
    } else {
      //否则直接渲染
      render = MapData(sourceData, columnData);
    }
    return render;
  }, [columnData, current, pagination, paginationData, sourceData, sort]);

  return (
    <div>
      <TableTable>
        <thead>
          <tr>
            {columnData.map((v, i) => {
              return (
                <th key={i}>
                  {v.sorted && v.sorter && (
                    <Sort>
                      <svg
                        onClick={() => {
                          const newSourceData = sourceData.sort(
                            v.sorter?.compare,
                          );
                          // console.log(newSourceData)
                          setSourceData(newSourceData);
                          setSort(true);
                        }}
                        viewBox="0 0 1638 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3478"
                        width="12"
                        height="12"
                      >
                        <path
                          d="M1459.2 963.4816H179.2A102.4 102.4 0 0 1 102.0928 793.6l562.9952-643.2768a204.8 204.8 0 0 1 308.224 0l562.9952 643.2768a102.4 102.4 0 0 1-77.1072 169.8816z"
                          fill="#1296db"
                          p-id="3479"
                        ></path>
                      </svg>
                      <svg
                        onClick={() => {
                          const newSourceData = sourceData
                            .sort(v.sorter?.compare)
                            .reverse();
                          // console.log(newSourceData)
                          setSourceData(newSourceData);
                          setSort(false);
                        }}
                        viewBox="0 0 1394 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4338"
                        width="11"
                        height="10"
                      >
                        <path
                          d="M808.665066 968.123525a139.174837 139.174837 0 0 1-222.989114 0L28.061551 224.448838A140.525626 140.525626 0 0 1 0 140.133462C0 62.746326 62.484883 0 139.567002 0h1115.228801c30.283817 0 59.739731 9.891261 83.944998 28.192273 61.569833 46.558646 73.901229 134.425289 27.538666 196.256565L808.665066 968.123525z"
                          fill="#1296db"
                          p-id="4339"
                        ></path>
                      </svg>
                    </Sort>
                  )}
                  <span>{v.title}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </TableTable>
      {pagination && (
        <Pagination
          style={{ justifyContent: 'flex-end' }}
          total={totalLen}
          pageSize={pageSize}
          onShowSizeChange={(v: number) => setCurrent(v - 1)}
          defaultCurrent={1}
        ></Pagination>
      )}
    </div>
  );
};
