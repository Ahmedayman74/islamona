import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addToFavReciterArray } from "../slices/favReciterSlice";
import { useDispatch, useSelector } from "react-redux";

const ReciterDetalis = ({ Suwar, UpdateSong, Reciter, DownloadAudio }) => {
  const dispatch = useDispatch();
  return Suwar.map(({ name, number }) => {
    return (
      <li className="d-flex  justify-content-between surah-box align-items-center">
        <p>
          <span className="surah-number qr-font2">
            {number}. {name}
          </span>
        </p>
        <ul className="options d-flex align-items-center">
          <li>
            <Link to={`/surah/${number}`}>
              <FontAwesomeIcon icon={faReadme} />
            </Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              document.querySelectorAll(".surah-box").forEach((surah) => {
                surah.classList.remove("active");
              });
              document
                .querySelectorAll(".surah-box")
                [number - 1].classList.add("active");
              // UpdateSong("ahmed")
              if (number < 10) {
                UpdateSong(`${Reciter.moshaf[0].server}00${number}.mp3`);
              } else if (number > 10 && number < 100) {
                UpdateSong(`${Reciter.moshaf[0].server}0${number}.mp3`);
              } else {
                UpdateSong(`${Reciter.moshaf[0].server}${number}.mp3`);
              }
            }}>
            <FontAwesomeIcon icon={faPlay} />
          </li>
          <li
            onClick={() => {
              Swal.fire({
                position: "bottom-end",
                title: `تحميل سوره ${name}...`,
                showConfirmButton: false,
                timer: 1500,
              });
              if (number < 10) {
                DownloadAudio(
                  `${name}_${Reciter.name}.mp3`,
                  `https://server11.mp3quran.net/yasser/00${number}.mp3`
                );
              } else if (number > 10 && number < 100) {
                DownloadAudio(
                  `${name}_${Reciter.name}.mp3`,
                  `https://server11.mp3quran.net/yasser/0${number}.mp3`
                );
              } else {
                DownloadAudio(
                  `${name}_${Reciter.name}.mp3`,
                  `https://server11.mp3quran.net/yasser/${number}.mp3`
                );
              }
            }}
            style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={faDownload} />
          </li>
          {/* <li style={{cursor:"pointer"}} onClick={() => {
          Swal.fire({
            position: 'bottom-end',
            title: ` تمت اضافه سوره ${name} الي المفضلة`,
            showConfirmButton: false,
            timer: 1000
          })
          dispatch(addToFavReciterArray({
            surahId  : number,
            surahName : name,
            reciterName : Reciter.name,
            reciterId : Reciter.id,
            reciterServer : Reciter.moshaf[0].server,
            isFavClicked : true
          }))
        }}><FontAwesomeIcon icon={faHeart} /></li> */}
        </ul>
      </li>
    );
  });
};

export default ReciterDetalis;
