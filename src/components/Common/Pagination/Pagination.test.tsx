import {create} from 'react-test-renderer';
import React from 'react';
import {Pagination} from './Pagination';

describe('Pagination component tests', () => {
    test('page count is 11 but should show only 10', () => {
        const component = create(<Pagination totalItemsCount={11} pageSize={1} currentPage={1} onPageChanged={()=>{}} portionSize={10}/>)
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let spans = root.findAllByType('span')
        // @ts-ignore
        expect(spans.length).toBe(10)
    })
})
