import React, { useState } from 'react';

let obj = {
    "kind": "books#volume",
    "id": "xNgstAEACAAJ",
    "etag": "CPM+Lv2BT4Q",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/xNgstAEACAAJ",
    "volumeInfo": {
        "title": "Fantastic Beasts and Where to Find Them",
        "authors": [
            "J K. ROFLING"
        ],
        "publisher": "Blurb",
        "publishedDate": "2017-09-02",
        "description": "\"Fantastic Beasts and Where to Find Them: Coloring Book\" is parody of \"Fantastic Beasts and Where to Find Them: Magical Creatures Coloring Book.\" Harry Potter fans are loving coloring this book.",
        "industryIdentifiers": [
            {
                "type": "ISBN_10",
                "identifier": "1389679071"
            },
            {
                "type": "ISBN_13",
                "identifier": "9781389679070"
            }
        ],
        "readingModes": {
            "text": false,
            "image": false
        },
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=xNgstAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=xNgstAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=xNgstAEACAAJ&dq=harry+potter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=xNgstAEACAAJ&dq=harry+potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Fantastic_Beasts_and_Where_to_Find_Them.html?hl=&id=xNgstAEACAAJ"
    },
    "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": false
        },
        "pdf": {
            "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=xNgstAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "&quot;Fantastic Beasts and Where to Find Them: Coloring Book&quot; is parody of &quot;Fantastic Beasts and Where to Find Them: Magical Creatures Coloring Book.&quot; Harry Potter fans are loving coloring this book."
    }
}

const Display = ({ data }) => {

    const [banner, setBanner] = useState(obj);

    console.log(data);

    return (

        <div className="display">
            <div>
                {banner && <div className="banner">
                    <div className='banner-img'>
                        {banner.volumeInfo.imageLinks.thumbnail && <img src={banner.volumeInfo.imageLinks.thumbnail} alt="" />}
                    </div>

                    <div className='banner-info'>
                        <div className='title'> <h2>{banner.volumeInfo.title}</h2> <p style={{ color: 'rgba(255, 255, 255, 0.50)' }}>Published On : {banner.volumeInfo.publishedDate}</p></div>

                        <div className='author'>{banner.volumeInfo.authors[0]}</div>
                        <div className='des'>{banner.volumeInfo.description}</div>
                        <ul>
                            <li>Avg Ratings : {banner.volumeInfo.averageRating || 0}</li>
                            <li>Rating Count : {banner.volumeInfo.ratingsCount || 0}</li>
                            <li>Publisher : {banner.volumeInfo.publisher}</li>
                            <li>Language : {banner.volumeInfo.language}</li>
                        </ul>
                        <div className='banner-btn'>
                            <button onClick={()=> window.location.href = 'http://play.google.com/books/reader?id=nYKYzgEACAAJ&hl=&source=gbs_api'}>Now Read!</button>
                            <button>More Info!</button>
                        </div>
                    </div>


                </div>}
            </div>

            <div className='box-container'>
                {data && data.map((ele, idx) => {
                    return (
                        <div className='box' onClick={() => {
                            setBanner(ele)
                            console.log(ele);
                        }}>
                            <img src={ele.volumeInfo.imageLinks.thumbnail} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>


    );
}

export default Display;
