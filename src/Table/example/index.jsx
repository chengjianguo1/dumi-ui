import React from 'react';
import { Table } from 'dumi-ui';

export default () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Chinese Score',
      dataIndex: 'chinese',
      sorted: true,
      sorter: {
        compare: (a, b) => b.chinese - a.chinese,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
    },
    {
      title: 'English Score',
      dataIndex: 'english',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 55,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 78,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};
