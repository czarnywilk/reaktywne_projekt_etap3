import React from "react";
import { Component } from "react";
import _ from 'lodash';

class Pagination extends Component{
    constructor(props){
        super(props);
        
        this.itemsCount = props.itemsCount;
        this.pageSize = props.pageSize;
        this.currentPage = props.currentPage;
        this.pagesCount = Math.ceil(this.itemsCount/this.pageSize);
        if (this.pagesCount === 1) return null;
        this.pages = _.range(1, this.pagesCount + 1);
        this.onPageChange = props.onPageChange;
    }

    function(){
        this.onPageChange(1);
    }

    render(){
        return (
            <nav>
                <ul className="pagination pagination-sm">
                    <li className={ 'page-item' } /*onClick={() => this.onPageChange(item)}*/>
                        <a style={{cursor: 'pointer'}} className="page-link" onClick={() => {this.onPageChange(1);this.forceUpdate();}}>&lt;&lt;</a>
                    </li>
                    <li className={ 'page-item' } /*onClick={() => this.onPageChange(item)}*/>
                        <a style={{cursor: 'pointer'}} className="page-link" onClick={() => {this.onPageChange(this.currentPage === 1 ? 1 : this.currentPage - 1);this.forceUpdate();}}>&lt;</a>
                    </li>
                    {this.pages.map((item, key) => (
                        <li key={key} className={ item === this.currentPage ? 'page-item active' : 'page-item' } /*onClick={() => this.onPageChange(item)}*/>
                            <a style={{cursor: 'pointer'}} className="page-link" onClick={() => {this.onPageChange(item);this.forceUpdate();}}>{item}</a>
                        </li>
                        )
                    )}
                    <li className={ 'page-item' } /*onClick={() => this.onPageChange(item)}*/>
                        <a style={{cursor: 'pointer'}} className="page-link" onClick={() => {this.onPageChange(this.currentPage === this.pagesCount ? this.pagesCount : this.currentPage + 1);this.forceUpdate();}}>&gt;</a>
                    </li>
                    <li className={ 'page-item' } /*onClick={() => this.onPageChange(item)}*/>
                        <a style={{cursor: 'pointer'}} className="page-link" onClick={() => {this.onPageChange(this.pagesCount);this.forceUpdate();}}>&gt;&gt;</a>
                    </li>
                </ul>
            </nav>
 
        )
    }
};


export default Pagination;