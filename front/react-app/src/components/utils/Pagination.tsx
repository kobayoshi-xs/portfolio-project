import React, {useState, useEffect} from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationOutlined: React.VFC = () => {
  const [page, setPage] = useState(1);//ページ番号
  const [pageCount, setPageCount] = useState();//ページ数
  const [allItems, setAllItems] = useState([]);//全データ
  const [displayedItems, setDisplayedItems] = useState([]); //表示データ
  const displayNum = 30; //1ページあたりの項目数

  const items = [...]

  useEffect(() => {
    setAllItems(items);
    //ページカウントの計算（今回は3項目/ページなので4ページ）
    setPageCount(Math.ceil(items.length/displayNum));
    //表示データを抽出
    setDisplayedItems(items.slice(((page - 1) * displayNum), page * displayNum))
  }, [])

  const handleChange = (event, index) => {
    //ページ移動時にページ番号を更新
    setPage(index);
    //ページ移動時に表示データを書き換える
    setDisplayedItems(allItems.slice(((index - 1) * displayNum), index * displayNum))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={pageCount} page={page} variant="outlined" onChange={handleChange} />
    </Stack>
  );
}
