import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router';
import { ExportContextGlobal } from '../context/ContextGlobal'

export default function FilteredCards({isLoading}) {

  const {
    isInformatic,
    setInformtic,
    isMultimedia,
    setMeltimedia,
    isVactions,
    setVacations,
    handleSelection,
    setSelected,
    isSelected } = ExportContextGlobal();

  return (<>
  {/* {isInformatic && !isLoading && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Informatica</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isInformatic.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm fade-in'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/items/informatica/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected({ type: element.category, id: element.id })}>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore' onClick={() => handleSelection("informatica", element.id)}>
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
    } */}

    {isMultimedia && !isLoading && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Multimediale</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isMultimedia.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm fade-in'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/items/media/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected({ type: element.category, id: element.id})}>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore' onClick={() => handleSelection("multimedia", element.id)}>
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

    {/* {isVactions && !isLoading && <div className='container-fluid d-flex flex-column p-3'>
        <h2>Viaggi</h2>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-1'>
          {isVactions.map((element, index) => (
            <div className='col' key={index}>
              <div className='card h-100 shadow-sm fade-in'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className='card-title'>{element.title}</h5>
                    <p className='card-subtitle text-muted mb-2'>{element.category}</p>
                  </div>
                  <div className='mt-auto d-flex justify-content-between align-items-center'>
                    <NavLink className='btn btn-outline-primary btn-sm' to={`/items/viaggi/${element.id}`}>Dettagli</NavLink>
                    <div className='d-flex gap-2'>
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected({ type: element.category, id: element.id})}>
                        <i className='bi bi-star-fill'></i>
                      </button>
                      <button className='btn btn-sm btn-outline-secondary compare-btn' data-id={element.id} title='Aggiungi al comparatore' onClick={() => handleSelection("viaggi", element.id)}>
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
    } */}
  </>)
}