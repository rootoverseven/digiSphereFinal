import * as THREE from 'https://unpkg.com/three@0.119.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';

// DATA IMPORT


//-----------------------------------------------------------------------------------------------------------------
let data = [
  {
      "pk": 8,
      "country_name": "Albania",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "20.168331",
      "country_latitude": "41.153332",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 9,
      "country_name": "Afghanistan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "67.709953",
      "country_latitude": "33.939110",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 10,
      "country_name": "Algeria",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "1.659626",
      "country_latitude": "28.033886",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 11,
      "country_name": "Andorra",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "1.601554",
      "country_latitude": "42.546245",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 12,
      "country_name": "Angola",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "17.873887",
      "country_latitude": "-11.202692",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 13,
      "country_name": "Antigua & Barbuda",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-61.796428",
      "country_latitude": "17.060816",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 14,
      "country_name": "Armenia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "45.038189",
      "country_latitude": "40.069099",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 15,
      "country_name": "Argentina",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-63.616672",
      "country_latitude": "-38.416097",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 16,
      "country_name": "Australia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "133.775136",
      "country_latitude": "-25.274398",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 17,
      "country_name": "Austria",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "14.550072",
      "country_latitude": "47.516231",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 18,
      "country_name": "Azerbaijan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "47.576927",
      "country_latitude": "40.143105",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 19,
      "country_name": "Bahrain",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "50.637772",
      "country_latitude": "25.930414",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 20,
      "country_name": "Bangladesh",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "90.356331",
      "country_latitude": "23.684994",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 21,
      "country_name": "Barbados",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-59.543198",
      "country_latitude": "13.193887",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 22,
      "country_name": "Belarus",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "27.953389",
      "country_latitude": "53.709807",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 23,
      "country_name": "Belgium",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "4.469936",
      "country_latitude": "50.503887",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 24,
      "country_name": "Belize",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-88.497650",
      "country_latitude": "17.189877",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 26,
      "country_name": "Bolivia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-63.588653",
      "country_latitude": "-16.290154",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 28,
      "country_name": "Bosnia & Herzegovina",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "17.679076",
      "country_latitude": "43.915886",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 30,
      "country_name": "Brazil",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-51.925280",
      "country_latitude": "-14.235004",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 32,
      "country_name": "Bulgaria",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "25.485830",
      "country_latitude": "42.733883",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 34,
      "country_name": "Burundi",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "29.918886",
      "country_latitude": "-3.373056",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 37,
      "country_name": "Cameroon",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "12.354722",
      "country_latitude": "7.369722",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 39,
      "country_name": "Chad",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "18.732207",
      "country_latitude": "15.454166",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 40,
      "country_name": "China",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "104.195397",
      "country_latitude": "35.861660",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 43,
      "country_name": "Costa Rica",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-83.753428",
      "country_latitude": "9.748917",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 45,
      "country_name": "Croatia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "15.200000",
      "country_latitude": "45.100000",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 47,
      "country_name": "Cyprus",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "33.429859",
      "country_latitude": "35.126413",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 49,
      "country_name": "Denmark",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "9.501785",
      "country_latitude": "56.263920",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 52,
      "country_name": "Dominica",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-61.370976",
      "country_latitude": "15.414999",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 54,
      "country_name": "Egypt",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "30.802498",
      "country_latitude": "26.820553",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 56,
      "country_name": "Eritrea",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "39.782334",
      "country_latitude": "15.179384",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 58,
      "country_name": "Estonia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "BALTICS",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "25.013607",
      "country_latitude": "58.595272",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 60,
      "country_name": "Fiji",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "179.414413",
      "country_latitude": "-16.578193",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 62,
      "country_name": "France",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "2.213749",
      "country_latitude": "46.227638",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 64,
      "country_name": "Gambia, The",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-15.310139",
      "country_latitude": "13.443182",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 66,
      "country_name": "Germany",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "10.451526",
      "country_latitude": "51.165691",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 69,
      "country_name": "Grenada",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-61.604171",
      "country_latitude": "12.262776",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 71,
      "country_name": "Guinea",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-9.696645",
      "country_latitude": "9.945587",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 25,
      "country_name": "Bhutan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "90.433601",
      "country_latitude": "27.514162",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 27,
      "country_name": "Benin",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "2.315834",
      "country_latitude": "9.307690",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 29,
      "country_name": "Botswana",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "24.684866",
      "country_latitude": "-22.328474",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 31,
      "country_name": "Brunei",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "114.727669",
      "country_latitude": "4.535277",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 33,
      "country_name": "Burkina Faso",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-1.561593",
      "country_latitude": "12.238333",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 35,
      "country_name": "Cambodia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "104.990963",
      "country_latitude": "12.565679",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 36,
      "country_name": "Canada",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AMERICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-106.346771",
      "country_latitude": "56.130366",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 38,
      "country_name": "Cape Verde",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-24.013197",
      "country_latitude": "16.002082",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 41,
      "country_name": "Chile",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-71.542969",
      "country_latitude": "-35.675147",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 42,
      "country_name": "Colombia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-74.297333",
      "country_latitude": "4.570868",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 44,
      "country_name": "Comoros",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "43.872219",
      "country_latitude": "-11.875001",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 46,
      "country_name": "Cuba",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-77.781167",
      "country_latitude": "21.521757",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 48,
      "country_name": "Czech Republic",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "15.472962",
      "country_latitude": "49.817492",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 50,
      "country_name": "Djibouti",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "42.590275",
      "country_latitude": "11.825138",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 51,
      "country_name": "Dominican Republic",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-70.162651",
      "country_latitude": "18.735693",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 53,
      "country_name": "Ecuador",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-78.183406",
      "country_latitude": "-1.831239",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 55,
      "country_name": "El Salvador",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-88.896530",
      "country_latitude": "13.794185",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 57,
      "country_name": "Equatorial Guinea",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "10.267895",
      "country_latitude": "1.650801",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 59,
      "country_name": "Ethiopia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "40.489673",
      "country_latitude": "9.145000",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 61,
      "country_name": "Finland",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "25.748151",
      "country_latitude": "61.924110",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 63,
      "country_name": "Gabon",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "11.609444",
      "country_latitude": "-0.803689",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 65,
      "country_name": "Georgia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "43.356892",
      "country_latitude": "42.315407",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 67,
      "country_name": "Ghana",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-1.023194",
      "country_latitude": "7.946527",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 68,
      "country_name": "Greece",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "21.824312",
      "country_latitude": "39.074208",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 70,
      "country_name": "Guatemala",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-90.230759",
      "country_latitude": "15.783471",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 72,
      "country_name": "Guinea-Bissau",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-15.180413",
      "country_latitude": "11.803749",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 74,
      "country_name": "Honduras",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-86.241905",
      "country_latitude": "15.199999",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 76,
      "country_name": "Hong Kong",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "114.109497",
      "country_latitude": "22.396428",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 78,
      "country_name": "Iceland",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-19.020835",
      "country_latitude": "64.963051",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 80,
      "country_name": "Iran",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "53.688046",
      "country_latitude": "32.427908",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 82,
      "country_name": "Iraq",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "43.679291",
      "country_latitude": "33.223191",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 84,
      "country_name": "Ireland",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-8.243890",
      "country_latitude": "53.412910",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 87,
      "country_name": "Japan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "138.252924",
      "country_latitude": "36.204824",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 89,
      "country_name": "Kazakhstan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "66.923684",
      "country_latitude": "48.019573",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 91,
      "country_name": "Kiribati",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-168.734039",
      "country_latitude": "-3.370417",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 93,
      "country_name": "Kuwait",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "47.481766",
      "country_latitude": "29.311660",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 95,
      "country_name": "Latvia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "BALTICS",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "24.603189",
      "country_latitude": "56.879635",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 97,
      "country_name": "Lesotho",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "28.233608",
      "country_latitude": "-29.609988",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 99,
      "country_name": "Libya",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "17.228331",
      "country_latitude": "26.335100",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 101,
      "country_name": "Lithuania",
      "no_of_states": 1,
      "country_population": null,
      "continent": "BALTICS",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "23.881275",
      "country_latitude": "55.169438",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 103,
      "country_name": "Macau",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "113.543873",
      "country_latitude": "22.198745",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 105,
      "country_name": "Madagascar",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "46.869107",
      "country_latitude": "-18.766947",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 107,
      "country_name": "Maldives",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "73.220680",
      "country_latitude": "3.202778",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 109,
      "country_name": "Mali",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-3.996166",
      "country_latitude": "17.570692",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 111,
      "country_name": "Mauritania",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-10.940835",
      "country_latitude": "21.007890",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 114,
      "country_name": "Mexico",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-102.552784",
      "country_latitude": "23.634501",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 73,
      "country_name": "Guyana",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-58.930180",
      "country_latitude": "4.860416",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 75,
      "country_name": "Haiti",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-72.285215",
      "country_latitude": "18.971187",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 77,
      "country_name": "Hungary",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "19.503304",
      "country_latitude": "47.162494",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 79,
      "country_name": "India",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "78.962880",
      "country_latitude": "20.593684",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 81,
      "country_name": "Indonesia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "113.921327",
      "country_latitude": "-0.789275",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 83,
      "country_name": "Israel",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "34.851612",
      "country_latitude": "31.046051",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 85,
      "country_name": "Italy",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "12.567380",
      "country_latitude": "41.871940",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 86,
      "country_name": "Jamaica",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-77.297508",
      "country_latitude": "18.109581",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 88,
      "country_name": "Jordan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "36.238414",
      "country_latitude": "30.585164",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 90,
      "country_name": "Kenya",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "37.906193",
      "country_latitude": "-0.023559",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 92,
      "country_name": "Kyrgyzstan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "74.766098",
      "country_latitude": "41.204380",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 94,
      "country_name": "Laos",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "102.495496",
      "country_latitude": "19.856270",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 96,
      "country_name": "Lebanon",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "35.862285",
      "country_latitude": "33.854721",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 98,
      "country_name": "Liberia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-9.429499",
      "country_latitude": "6.428055",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 100,
      "country_name": "Liechtenstein",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "9.555373",
      "country_latitude": "47.166000",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 102,
      "country_name": "Luxembourg",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "6.129583",
      "country_latitude": "49.815273",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 104,
      "country_name": "Malawi",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "34.301525",
      "country_latitude": "-13.254308",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 106,
      "country_name": "Malaysia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "101.975766",
      "country_latitude": "4.210484",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 108,
      "country_name": "Malta",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "14.375416",
      "country_latitude": "35.937496",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 110,
      "country_name": "Marshall Islands",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "171.184478",
      "country_latitude": "7.131474",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 112,
      "country_name": "Mauritius",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "57.552152",
      "country_latitude": "-20.348404",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 113,
      "country_name": "Moldova",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "28.369885",
      "country_latitude": "47.411631",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 115,
      "country_name": "Monaco",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "7.412841",
      "country_latitude": "43.750298",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 116,
      "country_name": "Mongolia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "103.846656",
      "country_latitude": "46.862496",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 118,
      "country_name": "Mozambique",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "35.529562",
      "country_latitude": "-18.665695",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 120,
      "country_name": "Nauru",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "166.931503",
      "country_latitude": "-0.522778",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 121,
      "country_name": "Nepal",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "84.124008",
      "country_latitude": "28.394857",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 123,
      "country_name": "New Zealand",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "174.885971",
      "country_latitude": "-40.900557",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 125,
      "country_name": "Niger",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "8.081666",
      "country_latitude": "17.607789",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 127,
      "country_name": "Norway",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "8.468946",
      "country_latitude": "60.472024",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 129,
      "country_name": "Oman",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "55.923255",
      "country_latitude": "21.512583",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 131,
      "country_name": "Panama",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-80.782127",
      "country_latitude": "8.537981",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 133,
      "country_name": "Paraguay",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-58.443832",
      "country_latitude": "-23.442503",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 135,
      "country_name": "Philippines",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "121.774017",
      "country_latitude": "12.879721",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 137,
      "country_name": "Portugal",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-8.224454",
      "country_latitude": "39.399872",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 139,
      "country_name": "Romania",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "24.966760",
      "country_latitude": "45.943161",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 141,
      "country_name": "Rwanda",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "29.873888",
      "country_latitude": "-1.940278",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 144,
      "country_name": "Saint Lucia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-60.978893",
      "country_latitude": "13.909444",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 146,
      "country_name": "Saudi Arabia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "45.079162",
      "country_latitude": "23.885942",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 148,
      "country_name": "Seychelles",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "55.491977",
      "country_latitude": "-4.679574",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 150,
      "country_name": "Singapore",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "103.819836",
      "country_latitude": "1.352083",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 152,
      "country_name": "Slovenia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "14.995463",
      "country_latitude": "46.151241",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 154,
      "country_name": "Solomon Islands",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "160.156194",
      "country_latitude": "-9.645710",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 156,
      "country_name": "South Africa",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "22.937506",
      "country_latitude": "-30.559482",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 158,
      "country_name": "Sri Lanka",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "80.771797",
      "country_latitude": "7.873054",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 159,
      "country_name": "Suriname",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-56.027783",
      "country_latitude": "3.919305",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 117,
      "country_name": "Morocco",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-7.092620",
      "country_latitude": "31.791702",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 119,
      "country_name": "Namibia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "18.490410",
      "country_latitude": "-22.957640",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 122,
      "country_name": "Netherlands",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "5.291266",
      "country_latitude": "52.132633",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 124,
      "country_name": "Nicaragua",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-85.207229",
      "country_latitude": "12.865416",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 126,
      "country_name": "Nigeria",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "8.675277",
      "country_latitude": "9.081999",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 128,
      "country_name": "Pakistan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "69.345116",
      "country_latitude": "30.375321",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 130,
      "country_name": "Palau",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "134.582520",
      "country_latitude": "7.514980",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 132,
      "country_name": "Papua New Guinea",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "143.955550",
      "country_latitude": "-6.314993",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 134,
      "country_name": "Peru",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-75.015152",
      "country_latitude": "-9.189967",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 136,
      "country_name": "Poland",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "19.145136",
      "country_latitude": "51.919438",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 138,
      "country_name": "Qatar",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "51.183884",
      "country_latitude": "25.354826",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 140,
      "country_name": "Russia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "105.318756",
      "country_latitude": "61.524010",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 142,
      "country_name": "Saint Kitts & Nevis",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-62.782998",
      "country_latitude": "17.357822",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 143,
      "country_name": "Samoa",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-172.104629",
      "country_latitude": "-13.759029",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 145,
      "country_name": "San Marino",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "12.457777",
      "country_latitude": "43.942360",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 147,
      "country_name": "Serbia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "21.005859",
      "country_latitude": "44.016521",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 149,
      "country_name": "Sierra Leone",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-11.779889",
      "country_latitude": "8.460555",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 151,
      "country_name": "Slovakia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "EASTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "19.699024",
      "country_latitude": "48.669026",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 153,
      "country_name": "Senegal",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-14.452362",
      "country_latitude": "14.497401",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 155,
      "country_name": "Somalia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "46.199616",
      "country_latitude": "5.152149",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 157,
      "country_name": "Spain",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-3.749220",
      "country_latitude": "40.463667",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 160,
      "country_name": "Sudan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "30.217636",
      "country_latitude": "12.862807",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 162,
      "country_name": "Switzerland",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "8.227512",
      "country_latitude": "46.818188",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 161,
      "country_name": "Sweden",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "18.643501",
      "country_latitude": "60.128161",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 163,
      "country_name": "Syria",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "38.996815",
      "country_latitude": "34.802075",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 165,
      "country_name": "Tanzania",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "34.888822",
      "country_latitude": "-6.369028",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 167,
      "country_name": "Thailand",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "100.992541",
      "country_latitude": "15.870032",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 170,
      "country_name": "Tonga",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-175.198242",
      "country_latitude": "-21.178986",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 172,
      "country_name": "Turkey",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "35.243322",
      "country_latitude": "38.963745",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 174,
      "country_name": "Tuvalu",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "177.649330",
      "country_latitude": "-7.109535",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 176,
      "country_name": "United Arab Emirates",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "53.847818",
      "country_latitude": "23.424076",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 179,
      "country_name": "United Kingdom",
      "no_of_states": 1,
      "country_population": null,
      "continent": "WESTERN EUROPE",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-3.435973",
      "country_latitude": "55.378051",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 181,
      "country_name": "Uzbekistan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "64.585262",
      "country_latitude": "41.377491",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 183,
      "country_name": "Venezuela",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-66.589730",
      "country_latitude": "6.423750",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 185,
      "country_name": "Yemen",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NEAR EAST",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "48.516388",
      "country_latitude": "15.552727",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 187,
      "country_name": "Zimbabwe",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "29.154857",
      "country_latitude": "-19.015438",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 164,
      "country_name": "Taiwan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "120.960515",
      "country_latitude": "23.697810",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 166,
      "country_name": "Tajikistan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "71.276093",
      "country_latitude": "38.861034",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 168,
      "country_name": "Togo",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "0.824782",
      "country_latitude": "8.619543",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 169,
      "country_name": "Trinidad & Tobago",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-61.222503",
      "country_latitude": "10.691803",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 171,
      "country_name": "Tunisia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "9.537499",
      "country_latitude": "33.886917",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 173,
      "country_name": "Turkmenistan",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "59.556278",
      "country_latitude": "38.969719",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 175,
      "country_name": "Uganda",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "32.290275",
      "country_latitude": "1.373333",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 177,
      "country_name": "Ukraine",
      "no_of_states": 1,
      "country_population": null,
      "continent": "C.W. OF IND. STATES",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "31.165580",
      "country_latitude": "48.379433",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 178,
      "country_name": "United States",
      "no_of_states": 1,
      "country_population": null,
      "continent": "NORTHERN AMERICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-95.712891",
      "country_latitude": "37.090240",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 180,
      "country_name": "Uruguay",
      "no_of_states": 1,
      "country_population": null,
      "continent": "LATIN AMER. & CARIB",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "-55.765835",
      "country_latitude": "-32.522779",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 182,
      "country_name": "Vanuatu",
      "no_of_states": 1,
      "country_population": null,
      "continent": "OCEANIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "166.959158",
      "country_latitude": "-15.376706",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 184,
      "country_name": "Vietnam",
      "no_of_states": 1,
      "country_population": null,
      "continent": "ASIA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "108.277199",
      "country_latitude": "14.058324",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  },
  {
      "pk": 186,
      "country_name": "Zambia",
      "no_of_states": 1,
      "country_population": null,
      "continent": "SUB-SAHARAN AFRICA",
      "mother_tongue": "Default",
      "country_area": null,
      "country_languages": "Default-lang",
      "country_description": "Default Description",
      "flag_url": "https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      "country_longitude": "27.849332",
      "country_latitude": "-13.133897",
      "country_rivers": "Default rivers",
      "country_capital": "Default-capital",
      "head_of_country": "default",
      "country_video_url": "xxxxxxx"
  }
];
// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         let response = JSON.parse(xhttp.responseText);
//         let output = Object.values(response);
//         for (let i = 0; i < output.length; i++) {
//             data.push(output[i]);
//         }
//     }
// };
// xhttp.open("GET", "../DATA/Data2.json", true);
// xhttp.send();
// console.log(data);

// THREEJS CODE


// CREATE scene where objects will be placed (kind of like a stage)
const scene = new THREE.Scene();

// CREATE camera to see objects (kind of like sitting in the audience)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// CREATE renderer to display the created objects (kind of like the people who place the diferent sets on the stage)
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CREATE controls so that we can interact with the objects/have interactivity
const controls = new OrbitControls(camera, renderer.domElement);

// CREATE raycaster for mouse interaction
const raycaster = new THREE.Raycaster();

// CREATE vector2 for mouse and mobile x,y coordinates
const mouse = new THREE.Vector2();
const touch = new THREE.Vector2();

// CREATE earth
// Earthmap is used for the basic texture which has the various continents/countries/etc. on it
let earthMap = new THREE.TextureLoader().load('./IMAGES/earth4k.jpg');

// EarthBumpMap is used to give the texture some "depth" so it is more appealing on eyes and data visuals
let earthBumpMap = new THREE.TextureLoader().load('./IMAGES/bump4k.jpg');

// EarthSpecMap gies the earth some shininess to the environment, allowing reflectivity off of the lights
let earthSpecMap = new THREE.TextureLoader().load('./IMAGES/earthspec4k.jpg');

// Geometry is what the shape/size of the globe will be
let earthGeometry = new THREE.SphereGeometry(10, 32, 32);

// Material is how the globe will look like
let earthMaterial = new THREE.MeshPhongMaterial({
    map: earthMap,
    bumpMap: earthBumpMap,
    bumpScale: 0.1,
    specularMap: earthSpecMap,
    specular: new THREE.Color('grey'),
    shininess: 12,
});

// Earth is the final product which ends up being rendered on scene, also is used as a grandparent for the points of interest
let earth = new THREE.Mesh(earthGeometry, earthMaterial);

// Add the earth to scene
scene.add(earth);



let boundariesTexture = new THREE.TextureLoader().load('./IMAGES/boundaries_2.png');
let boundariesGeo = new THREE.SphereGeometry(10, 32, 32);

let boundariesMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    map: boundariesTexture,
    transparent: true,
});

let boundaries = new THREE.Mesh(boundariesGeo, boundariesMaterial);

boundaries.scale.set(1, 1, 1);
earth.add(boundaries)

// Add country to the earth object
let earthcountryGeo = new THREE.SphereGeometry(10, 32, 32);


// Add country material
let earthMaterialcountry = new THREE.MeshPhongMaterial({
    roughness: 1,
    color: 0xffffff,
    transparent: true,
    opacity: 0,
});

// Create final texture for country
let earthcountry = new THREE.Mesh(earthcountryGeo, earthMaterialcountry);

// Scale above the earth sphere mesh
earthcountry.scale.set(1.002, 1.002, 1.002);

// Make child of the earth
earth.add(earthcountry)

//-------------------------------------------------------------------------------
// Add cloud to the earth object
let earthcloudGeo = new THREE.SphereGeometry(10, 32, 32);

// Add cloud texture
let earthcloudTexture = new THREE.TextureLoader().load('./IMAGES/earthCloud.png');

// Add cloud material
let earthMaterialcloud = new THREE.MeshLambertMaterial({
    roughness: 1,
    color: 0xffffff,
    map: earthcloudTexture,
    transparent: true,
    opacity: 0.7,
});

// Create final texture for cloud
let earthcloud = new THREE.Mesh(earthcloudGeo, earthMaterialcloud);

// Scale above the earth sphere mesh
earthcloud.scale.set(1.007, 1.007, 1.007);

// Make child of the earth
earth.add(earthcloud)

//------------------------------------------------------------------------------------

// CREATE variable to store array of lights
let lights = [];

// CreateSkyBox allows the scene to have more attractiveness to it, in this case by having the blue starred images around Earth
function createSkyBox(scene) {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        // '../IMAGES/space_right.png',
        // '../IMAGES/space_left.png',
        // '../IMAGES/space_top.png',
        // '../IMAGES/space_bot.png',
        // '../IMAGES/space_front.png',
        // '../IMAGES/space_back.png'
    ])
    scene.background = texture;
};

// CreateLights is a function which creates the lights and adds them to the scene.
function createLights(scene) {
    lights[0] = new THREE.PointLight("#ffffff", .5, 0);
    lights[1] = new THREE.PointLight("#ffffff", .5, 0);
    lights[2] = new THREE.PointLight("#ffffff", .8);
    lights[3] = new THREE.AmbientLight("#ffffff", 0.2);

    lights[0].position.set(50, 30, 50);
    lights[1].position.set(50, -30, 50);
    lights[2].position.set(-50, 30, -50);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);
    scene.add(lights[3]);
    const Helper = new THREE.PointLightHelper(lights[2]);
    scene.add(Helper);
}


function addSceneObjects(scene) {
    createLights(scene);
    createSkyBox(scene);
}

// AddSceneObjects adds the items to the scene
addSceneObjects(scene);

// Change position so we can see the objects
camera.position.z = 20;

// Disable control function, so users do not zoom too far in or pan away from center
controls.minDistance = 12;
controls.maxDistance = 30;
controls.enablePan = false;
controls.update();
controls.saveState();

// Add event listeners so DOM knows what functions to use when objects/items are interacted with
window.addEventListener('resize', onWindowResize, false);
document.getElementsByTagName("canvas")[0].addEventListener('click', onWindowClick, false);
//window.addEventListener('touchstart', onTouch, false);

// Used for showing/hiding the instruction box
let hidden = false;
function hideInstructions() {
    hidden = !hidden;
    if (hidden) {
        document.querySelector("#instruction-box").style.display = "none";
    } else {
        document.querySelector("#instruction-box").style.display = "flex";
    }
};

let instructionClicker = document.getElementById("instructions");
instructionClicker.addEventListener("click", hideInstructions, false);

// Resizes the window when it changes
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
// setting local storage-------------------------------------------------------------------

function changeValue(c_pk, value) {
    var x = window.open("", "myWindow", "width=200,height=100");
    x.localStorage.setItem(c_pk, value);
    x.close();
}

//------------------------------------------------------------
// Listens for the mouse to intersect object and when clicked returns the data to the inner html
function onWindowClick(event) {
    // console.log(window.getComputedStyle(document.getElementById("infoWrapper")).display);

    // console.log(window.getComputedStyle(document.getElementById("infoWrapper")).display);
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(earthcountry.children);


    for (let i = 0; i < intersects.length; i++) {
        document.getElementById("infoWrapper").style.display = "flex";
        document.getElementById("attemptQuizButton").style.display = "block";
        document.getElementById("topics").style.display = "block";

        // localStorage.setItem("c_pk", intersects[0].object.userData.pk);
        // localData.set( "c_pk", intersects[0].object.userData.pk )
        changeValue("c_pk", intersects[0].object.userData.pk);

        document.getElementById("info-box").innerHTML= `
        <div id="info-title" class="boxTitle">
            <strong> Getting Data </strong>
        </div>
        <div id="country_name" class="BoxText">
            <b style="color:#C473FF">Country:</b> Getting Data
        </div>
        <div id="continent" class="BoxText">
            Continent: Getting Data
        </div>
        `

        document.querySelector("#continent").innerText = "Continent: " + intersects[0].object.userData.continent;
        document.getElementById("continent").style.color = intersects[0].object.userData.color;
        document.querySelector("#country_name").innerHTML = `<b style="color:#C473FF">Country:</b>` + intersects[0].object.userData.country_name;
    }
    const item = intersects[0];
    let point = item.point;
    let camDistance = camera.position.copy(point).normalize.multiplyScalar(camDistance);

};

// Allows for the scene to move and be interacted with

let rotationDecider = 1;

function animate() {
    requestAnimationFrame(animate);
    if (rotationDecider == 1) {
        earth.rotation.y -= 0.0005;
    }
    earthcloud.rotation.y -= 0.0002;


    render();
    controls.update();
};

// Updates camera renderer
function render() {
    renderer.render(scene, camera);
};

// Removes the points of interest freeing up memory and space to have better performance
function removeChildren() {
    let destroy = earthcountry.children.length;
    while (destroy--) {
        earthcountry.remove(earthcountry.children[destroy].material.dispose())
        earthcountry.remove(earthcountry.children[destroy].geometry.dispose())
        earthcountry.remove(earthcountry.children[destroy])
    }
};

// Create and add coordinates for the globe
function addCountryCoord(earth, country_name, country_latitude, country_longitude, continent, pk, color) {
    let pointOfInterest = new THREE.SphereGeometry(.1, 32, 32);
    let lat = country_latitude * (Math.PI / 180);
    let lon = -country_longitude * (Math.PI / 180);
    const radius = 9.9;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    let material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color
    });

    let mesh = new THREE.Mesh(
        pointOfInterest,
        material
    );

    mesh.position.set(
        Math.cos(lat) * Math.cos(lon) * radius,
        Math.sin(lat) * radius,
        Math.cos(lat) * Math.sin(lon) * radius
    );

    mesh.rotation.set(0.0, -lon, lat - Math.PI * 0.5);

    mesh.userData.country_name = country_name;
    mesh.userData.color = color;
    mesh.userData.continent = continent;
    mesh.userData.pk = pk;
    rotationDecider = 0
    earthcountry.add(mesh)

};

// Variables to get information and change accordingly
let countryInfo = document.getElementById("country");
countryInfo.addEventListener("click", changeToCountry);

// Changes the information so data points can be seen
function changeToCountry() {
    // Show/hide needed and unneeded elements
    document.querySelector("#instruction-box").style.display = "none";
    document.getElementById("title-box").style.display = "none";

    removeChildren();

    // Get the data from the JSON file
    for (let i = 0; i < data.length; i++) {
        if (data[i].continent == 'ASIA') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'yellow');
        } else if (data[i].continent == 'NEAR EAST') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'orange');
        } else if (data[i].continent == 'NORTHERN AMERICA') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'lightblue');
        } else if (data[i].continent == 'WESTERN EUROPE') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'cyan');
        } else if (data[i].continent == 'EASTERN EUROPE') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'red');
        } else if (data[i].continent == 'BALTICS') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'purple');
        } else if (data[i].continent == 'C.W. OF IND. STATES') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'orange');
        } else if (data[i].continent == 'NORTHERN AFRICA') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'beige');
        } else if (data[i].continent == 'SUB-SAHARN AFRICA') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'brown');
        } else if (data[i].continent == 'LATIN AMER. & CARIB') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'gold');
        } else if (data[i].continent == 'OCEANIA') {
            addCountryCoord(earth, data[i].country_name, data[i].country_latitude, data[i].country_longitude, data[i].continent, data[i].pk, 'lightgreen');
        }
    }
};

// Call the animation function so scene is properly rendered
animate();


//----------------------------------------------------UI Controls------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------












function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByTagName("header")[0].style.display = "none";
}

document.getElementById("openbutton").addEventListener("click", openNav, false);

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("header")[0].style.display = "flex"
}

document.getElementById("closebutton").addEventListener("click", closeNav, false);
document.getElementById("mySidenav").addEventListener("click", closeNav, false);




  //----------------------------------------------------------------------------------------------------------

