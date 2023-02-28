import React, { FC } from "react";

import './Table.scss';

interface TableProps {
  tableName: string;
  rows: {
    rowName: string;
    rowContent: string[];
  }[];
}

const Table: FC<TableProps> = ({ tableName, rows }) => {
  return (
    <div className="table">
      <div className="table__header">
        <h6>{tableName}</h6>
      </div>
      <div className="table__body">
        {rows.map(row => {
          return (
            <div
              key={row.rowName}
              className="table__row row"
            >
              <div className="row__title">
                <p>
                  {row.rowName}
                </p>
              </div>
              <div className="row__content content">
                {row.rowContent.map(contentItem => {
                  return (
                    <div
                      key={contentItem}
                      className="content__item"
                    >
                      {contentItem}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Table;