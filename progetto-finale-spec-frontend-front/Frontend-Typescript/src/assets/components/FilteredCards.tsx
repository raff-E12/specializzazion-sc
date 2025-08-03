import React from 'react'
import { ExportContextGlobal } from '../context/ContextGlobal';
import { NavLink } from 'react-router';
import type { ExportContextGlobalObj } from '../types/TypesPrincipalCards';

type PropsCards = { isLoading: boolean };

export default function FilteredCards ({isLoading}: PropsCards) {

  const {
    isInformatic,
    isMultimedia,
    isVactions,
    setSelected,
    handleSelection
   } = ExportContextGlobal() as ExportContextGlobalObj;

  return (<>
  {isInformatic && !isLoading && <div className='container-fluid d-flex flex-column p-3'>
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
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected?.(element.category, element.id)}>
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
    }

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
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected?.(element.category, element.id)}>
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

    {isVactions && !isLoading && <div className='container-fluid d-flex flex-column p-3'>
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
                      <button className='btn btn-sm btn-outline-warning favorite-btn' data-id={element.id} title='Aggiungi ai preferiti' onClick={() => setSelected?.(element.category, element.id)}>
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
    }
  </>)
}