import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router';
import { ExportContextCards } from '../context/ContextCards'
import ResultList from '../pages/ResultList';

function Cards({isSearch, setSearch, isCategory, setCategory, isSort, setSort}) {

  const {
    isInformatic,
    setInformtic,
    isMultimedia,
    setMeltimedia,
    isVactions,
    setVacations } = ExportContextCards();

  return (<>
  {isInformatic && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Informatica</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isInformatic.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/informatica/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti'>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore'>
                        <i className='bi bi-people-fill'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }

    {isMultimedia && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Multimediale</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isMultimedia.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/media/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti'>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore'>
                        <i className='bi bi-people-fill'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }

    {isVactions && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Viaggi</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isVactions.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/viaggi/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti'>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore'>
                        <i className='bi bi-people-fill'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }
  </>)
}

export default React.memo(Cards)