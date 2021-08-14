import React, { useState } from 'react';
import { Pagination } from 'dumi-ui';

export default () => {
  const [pageNum, setPageNum] = useState(2);

  return (
    <div>
      <Pagination
        defaultCurrent={2}
        total={100}
        onShowSizeChange={(page) => {
          setPageNum(page);
        }}
      ></Pagination>
      <span>page:{pageNum}</span>
    </div>
  );
};
