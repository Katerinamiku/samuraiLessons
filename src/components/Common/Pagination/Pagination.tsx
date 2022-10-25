import s from "./Pagination.module.scss";
import React, {useState} from "react";


type PaginationPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize: number
}

export const Pagination = (props: PaginationPropsType) => {
//цифры переключения сттаниц - нужно их помещать в стейт так как мы их меняем
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages= [...pages, i];
    }

    //номер очередной порции со страницами
    let portionCount =  Math.ceil(pagesCount / props.portionSize)
    // устанавливаем стейт какую порцию показывать
    const [portionNumber, setPortionNumber] = useState<number>(Math.ceil(props.currentPage/props.portionSize))
    //определяем номер на правой и левой границу порции
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
            <div className={s.pagination}>
                    {portionNumber > 1 &&
                    <span className={s.pagButtons} onClick={() => setPortionNumber((p) => p - 1)}> {'<'} </span>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                                      onClick={(e) => {
                                          props.onPageChanged(p)
                                      }}>{p}</span>)}

                {portionCount > portionNumber &&
                    <span className={s.pagButtons} onClick={() => setPortionNumber((p) => p + 1)}> {'>'} </span>}

            </div>
    )}
