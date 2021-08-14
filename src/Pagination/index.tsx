import React, { useState, useMemo } from 'react';
import { PaginationProps } from './pagination.interface';
import { PageUl } from './styled';

function calculateMove(
  current: number,
  state: number[],
  totalPage: number,
): number[] | null {
  let mid = Math.floor(state.length / 2);
  let arr;
  let minus = current - state[mid];
  if (minus === 0) {
    arr = null;
  } else if (minus > 0) {
    let tmp = state[state.length - 1];
    if (tmp + minus < totalPage) {
      arr = state.map((v) => v + minus);
    } else {
      if (tmp === totalPage) {
        arr = null;
      } else {
        arr = state.map((v) => v + totalPage - tmp);
      }
    }
  } else {
    //负数
    if (state[0] + minus > 1) {
      arr = state.map((v) => v + minus);
    } else {
      //边缘，看最大能减几
      if (state[0] === 1) {
        arr = null;
      } else {
        arr = state.map((v) => v - state[0] + 1);
      }
    }
  }
  return arr;
}

export default (props: PaginationProps) => {
  const { onShowSizeChange } = props;
  const pageSize = props?.pageSize || 10;
  const defaultCurrent = props.defaultCurrent || 1;
  const barMaxSize = 5;
  const total = props.total;
  const [current, setCurrent] = useState(defaultCurrent);
  const [state, setState] = useState<Array<number>>([]);
  const totalPage = useMemo(() => {
    let number = Math.ceil(total / pageSize);
    if (number > barMaxSize) {
      let statetmp = new Array(barMaxSize).fill(1).map((x, y) => y + 1);
      setState(statetmp);
      let arr = calculateMove(defaultCurrent, statetmp, number);
      if (arr) {
        setState(arr);
      }
    } else {
      let statetmp = new Array(number).fill(1).map((x, y) => y + 1);
      let arr = calculateMove(defaultCurrent, statetmp, number);
      if (arr) {
        setState(arr);
      } else {
        setState([1]);
      }
    }
    return number;
  }, [pageSize, total]);
  console.log(totalPage);

  return (
    <PageUl style={{ display: 'flex' }}>
      <li>
        <button
          style={{
            cursor: current === 1 ? 'not-allowed' : '',
          }}
          disabled={current === 1}
          onClick={() => {
            if (state.length > 0) {
              if (state[0] > 1) {
                let statetmp = state.map((x) => x - 1);
                setState(statetmp);
                setCurrent(current - 1);
                onShowSizeChange?.(current - 1);
                let arr = calculateMove(current - 1, statetmp, totalPage);
                if (arr) {
                  setState(arr);
                }
              } else if (current !== state[0]) {
                setCurrent(current - 1);
                onShowSizeChange?.(current - 1);
                let arr = calculateMove(current - 1, state, totalPage);
                if (arr) {
                  setState(arr);
                }
              }
            }
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2041"
            width="16"
            height="16"
          >
            <path
              d="M398.912 513.152l377.28-384.256c27.904-28.416 27.904-74.432 0-102.784-27.84-28.352-73.024-28.352-100.8 0L247.808 461.504C233.792 475.776 226.88 494.464 226.944 513.152 226.88 531.84 233.792 550.464 247.808 564.736l427.584 435.392c27.84 28.352 73.024 28.352 100.8 0 27.904-28.352 27.904-74.368 0-102.656L398.912 513.152z"
              p-id="2042"
              fill="#1296db"
            ></path>
          </svg>
        </button>
      </li>
      {state.map((x, i) => {
        return (
          <li key={i}>
            <button
              style={{
                backgroundColor: current === x ? '#0d6efd' : '',
                color: current === x ? '#fff' : '',
              }}
              onClick={() => {
                setCurrent(x);
                onShowSizeChange?.(x);
                let arr = calculateMove(x, state, totalPage);
                if (arr) {
                  setState(arr);
                }
              }}
            >
              {x}
            </button>
          </li>
        );
      })}
      <li>
        <button
          style={{
            cursor: current === totalPage ? 'not-allowed' : '',
          }}
          disabled={current === totalPage}
          onClick={() => {
            if (state.length > 0) {
              if (state[barMaxSize! - 1] < totalPage) {
                let statetmp = state.map((x) => x + 1);
                setState(statetmp);
                setCurrent(current + 1);
                onShowSizeChange?.(current + 1);
                let arr = calculateMove(current + 1, statetmp, totalPage);
                if (arr) {
                  setState(arr);
                }
              } else {
                if (current !== totalPage) {
                  setCurrent(current + 1);
                  onShowSizeChange?.(current + 1);
                  let arr = calculateMove(current + 1, state, totalPage);
                  if (arr) {
                    setState(arr);
                  }
                }
              }
            }
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2902"
            width="16"
            height="16"
          >
            <path
              d="M312.56325 61.85579c15.286148 0 29.522384 5.878894 40.166815 16.564257l389.69649 390.391315c1.425466 1.39272 2.537799 2.577708 3.449565 3.846608l2.304486 2.905166c11.362792 11.416004 16.945951 24.848944 16.945951 39.068807 0 14.475689-5.708002 28.010961-16.056698 38.110993L356.692307 940.958702c-10.612709 10.467399-24.785499 16.236799-39.892569 16.236799-14.772448 0-28.726252-5.599532-39.287795-15.753799-10.497075-10.18599-16.538675-24.390503-16.538675-38.95215 0-14.382569 5.722328-28.009937 16.142655-38.366819l353.968777-350.170265L272.59905 154.524352c-10.249435-10.30981-15.909341-23.781636-15.909341-37.994336 0-14.889105 6.051833-28.859281 17.000186-39.333844C284.109198 67.306942 297.939181 61.85579 312.56325 61.85579z"
              p-id="2903"
              fill="#1296db"
            ></path>
          </svg>
        </button>
      </li>
    </PageUl>
  );
};
