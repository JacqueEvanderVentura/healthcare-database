import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'

import './Pacientes.scss'
export const Pacientes = () => {
  const dummyData= [
    {
      "numberrange": 82130717,
      "name": "Minerva Wise",
      "alphanumeric": "WKM32KCD6GK",
      "phone": "1-198-656-4394",
      "email": "faucibus.morbi@protonmail.edu"
    },
    {
      "numberrange": 47230761,
      "name": "Rafael Dunlap",
      "alphanumeric": "QQF13RLK3QH",
      "phone": "1-259-456-6883",
      "email": "auctor.mauris@outlook.net"
    },
    {
      "numberrange": 11631855,
      "name": "Brynne Madden",
      "alphanumeric": "KSQ74UBL3FU",
      "phone": "1-838-913-1984",
      "email": "congue@yahoo.com"
    },
    {
      "numberrange": 74410078,
      "name": "Vaughan Wiley",
      "alphanumeric": "PXN15XGQ1WE",
      "phone": "1-241-402-2381",
      "email": "neque.vitae@icloud.net"
    },
    {
      "numberrange": 57615961,
      "name": "Shoshana Mcdonald",
      "alphanumeric": "CEY92QLC1DH",
      "phone": "(293) 652-9228",
      "email": "in.felis@google.edu"
    },
    {
      "numberrange": 9714952,
      "name": "Zephania Aguilar",
      "alphanumeric": "YCN87CMB7LP",
      "phone": "1-672-250-8488",
      "email": "arcu.morbi@protonmail.org"
    },
    {
      "numberrange": 44215512,
      "name": "Kiara Walton",
      "alphanumeric": "ZOX71DIF2NM",
      "phone": "(654) 307-2358",
      "email": "tellus.eu@icloud.edu"
    },
    {
      "numberrange": 81327732,
      "name": "Jared Logan",
      "alphanumeric": "CRP25EPQ0EM",
      "phone": "(675) 658-6339",
      "email": "in.at@aol.net"
    },
    {
      "numberrange": 82016866,
      "name": "Axel Boyle",
      "alphanumeric": "GUT33BIB0CM",
      "phone": "(917) 706-5865",
      "email": "lorem@google.com"
    },
    {
      "numberrange": 39167957,
      "name": "Hakeem Wallace",
      "alphanumeric": "RFD57GTB7IV",
      "phone": "1-986-431-2013",
      "email": "orci.consectetuer@icloud.edu"
    },
    {
      "numberrange": 87754169,
      "name": "Griffith Frazier",
      "alphanumeric": "JPY32OSP3BF",
      "phone": "1-796-735-3965",
      "email": "egestas.nunc@hotmail.edu"
    },
    {
      "numberrange": 25526699,
      "name": "Jana Hale",
      "alphanumeric": "WUK82PEE0OK",
      "phone": "1-751-542-1516",
      "email": "dictum@yahoo.com"
    },
    {
      "numberrange": 68844783,
      "name": "Orlando Bauer",
      "alphanumeric": "MHZ84MOS4LU",
      "phone": "(623) 455-6446",
      "email": "proin.ultrices@outlook.org"
    },
    {
      "numberrange": 26564535,
      "name": "Kasimir Crawford",
      "alphanumeric": "DNP85HXD2OO",
      "phone": "1-937-381-1256",
      "email": "dictum.cursus@icloud.couk"
    },
    {
      "numberrange": 14031825,
      "name": "Charissa Massey",
      "alphanumeric": "WBG12KSP8EL",
      "phone": "1-278-678-5616",
      "email": "turpis.egestas.fusce@hotmail.couk"
    },
    {
      "numberrange": 87631577,
      "name": "Michelle Horne",
      "alphanumeric": "OUG38YJG6CQ",
      "phone": "(519) 302-3515",
      "email": "tincidunt.nibh.phasellus@outlook.edu"
    },
    {
      "numberrange": 48811754,
      "name": "Shea Copeland",
      "alphanumeric": "BEM68OOS4BW",
      "phone": "1-886-466-4218",
      "email": "scelerisque@protonmail.org"
    },
    {
      "numberrange": 22955068,
      "name": "Jerome Browning",
      "alphanumeric": "UDC86YUJ3JW",
      "phone": "(352) 781-1345",
      "email": "montes@yahoo.net"
    },
    {
      "numberrange": 82639498,
      "name": "Rhonda Snyder",
      "alphanumeric": "HJQ88FQS1XK",
      "phone": "1-715-332-6766",
      "email": "senectus.et.netus@outlook.com"
    },
    {
      "numberrange": 40270764,
      "name": "Jael Higgins",
      "alphanumeric": "QVY05VHM3PD",
      "phone": "1-674-286-3981",
      "email": "interdum@hotmail.ca"
    },
    {
      "numberrange": 71496128,
      "name": "Mollie Thomas",
      "alphanumeric": "PGR23KPI7EN",
      "phone": "1-921-663-6996",
      "email": "mauris.ipsum@outlook.edu"
    },
    {
      "numberrange": 144122,
      "name": "Ivor Lloyd",
      "alphanumeric": "TMH18BSE7EM",
      "phone": "1-453-535-2183",
      "email": "habitant.morbi@google.com"
    },
    {
      "numberrange": 60294808,
      "name": "Caleb Buchanan",
      "alphanumeric": "PDR61VOK7NI",
      "phone": "(781) 693-8232",
      "email": "ut.semper.pretium@outlook.ca"
    },
    {
      "numberrange": 72596324,
      "name": "Pascale James",
      "alphanumeric": "BVS29VVY9HX",
      "phone": "1-263-816-3174",
      "email": "mattis@icloud.org"
    },
    {
      "numberrange": 27150099,
      "name": "Sheila Sampson",
      "alphanumeric": "MTK90VCK5MH",
      "phone": "(481) 616-9451",
      "email": "eget@google.net"
    },
    {
      "numberrange": 87096620,
      "name": "Ariana Nicholson",
      "alphanumeric": "NQG85YWX5PI",
      "phone": "1-615-522-3150",
      "email": "a.facilisis@icloud.org"
    },
    {
      "numberrange": 3187270,
      "name": "Maryam Horton",
      "alphanumeric": "IEQ30RCO6HY",
      "phone": "(836) 467-5373",
      "email": "sem.nulla@outlook.org"
    },
    {
      "numberrange": 52712038,
      "name": "Pearl Briggs",
      "alphanumeric": "EUV07KZP2PN",
      "phone": "1-322-312-7936",
      "email": "dignissim.pharetra@hotmail.com"
    },
    {
      "numberrange": 6767471,
      "name": "Myles Berry",
      "alphanumeric": "YOG43UJU3DI",
      "phone": "1-463-237-8374",
      "email": "et.ipsum@outlook.net"
    },
    {
      "numberrange": 30000935,
      "name": "Oleg Crosby",
      "alphanumeric": "OKD66CWY4UX",
      "phone": "1-734-349-6345",
      "email": "semper.tellus@aol.edu"
    },
    {
      "numberrange": 31761480,
      "name": "Kiona Gonzales",
      "alphanumeric": "KWB51HOE3SR",
      "phone": "(780) 362-6327",
      "email": "ipsum.non@protonmail.ca"
    },
    {
      "numberrange": 47483675,
      "name": "Donovan Pena",
      "alphanumeric": "YID69WSI7JL",
      "phone": "(865) 417-1111",
      "email": "et.magnis@hotmail.edu"
    },
    {
      "numberrange": 4496135,
      "name": "Abraham Wiley",
      "alphanumeric": "AFX22TGQ5TC",
      "phone": "1-287-651-8843",
      "email": "sem.elit.pharetra@yahoo.ca"
    },
    {
      "numberrange": 21066073,
      "name": "Isabelle Patel",
      "alphanumeric": "TTN15HDC9QR",
      "phone": "1-162-437-1861",
      "email": "diam.nunc.ullamcorper@protonmail.org"
    },
    {
      "numberrange": 54607149,
      "name": "Daria Knox",
      "alphanumeric": "RXO21FBB0GX",
      "phone": "1-731-259-1713",
      "email": "imperdiet.dictum.magna@icloud.com"
    },
    {
      "numberrange": 80779819,
      "name": "Shafira Padilla",
      "alphanumeric": "GQO91JDM5JG",
      "phone": "(225) 648-8624",
      "email": "urna@icloud.net"
    },
    {
      "numberrange": 43411388,
      "name": "Ignacia David",
      "alphanumeric": "LCP66GBB4IH",
      "phone": "1-445-443-8267",
      "email": "varius@protonmail.com"
    },
    {
      "numberrange": 8697852,
      "name": "Steel Chan",
      "alphanumeric": "EEH22YKV2TS",
      "phone": "(448) 724-4132",
      "email": "semper.et.lacinia@protonmail.couk"
    },
    {
      "numberrange": 71079513,
      "name": "Aretha Carrillo",
      "alphanumeric": "MQT42JHB7GL",
      "phone": "1-276-802-8426",
      "email": "aenean@google.couk"
    },
    {
      "numberrange": 27885900,
      "name": "Cedric Pope",
      "alphanumeric": "NSN34IYN4JP",
      "phone": "(713) 940-7521",
      "email": "erat.vel.pede@outlook.org"
    },
    {
      "numberrange": 71415725,
      "name": "Martha Wiggins",
      "alphanumeric": "COO89QZJ2PP",
      "phone": "1-275-736-9554",
      "email": "nibh.phasellus@yahoo.com"
    },
    {
      "numberrange": 21559772,
      "name": "Tucker Gaines",
      "alphanumeric": "XVR56QKL9SF",
      "phone": "1-249-327-1274",
      "email": "rhoncus.nullam@google.org"
    },
    {
      "numberrange": 7057161,
      "name": "Brenden Diaz",
      "alphanumeric": "SDS42CDZ9QV",
      "phone": "1-702-828-3745",
      "email": "lorem.eget@icloud.ca"
    },
    {
      "numberrange": 18728435,
      "name": "TaShya Gallagher",
      "alphanumeric": "NVN40TTJ3XE",
      "phone": "1-664-458-1622",
      "email": "orci@yahoo.com"
    },
    {
      "numberrange": 39991359,
      "name": "Brianna Chang",
      "alphanumeric": "GLN64TPL5HQ",
      "phone": "1-441-986-3225",
      "email": "nec.orci.donec@google.net"
    },
    {
      "numberrange": 38543059,
      "name": "Preston Armstrong",
      "alphanumeric": "LGC85YAN3QI",
      "phone": "1-535-208-7315",
      "email": "egestas.urna.justo@icloud.org"
    },
    {
      "numberrange": 16915383,
      "name": "Yetta Richard",
      "alphanumeric": "IET17BHI8WE",
      "phone": "1-223-156-2672",
      "email": "leo@outlook.couk"
    },
    {
      "numberrange": 95226677,
      "name": "Dai Blanchard",
      "alphanumeric": "PZA22FAQ2DH",
      "phone": "(830) 572-1687",
      "email": "ut.nec@outlook.net"
    },
    {
      "numberrange": 57368758,
      "name": "Larissa Conner",
      "alphanumeric": "IQH23SUN7UE",
      "phone": "1-665-175-4408",
      "email": "tellus.non.magna@aol.ca"
    },
    {
      "numberrange": 79273756,
      "name": "Lee Walls",
      "alphanumeric": "VZW37WSE7VW",
      "phone": "(841) 433-6336",
      "email": "risus.morbi.metus@outlook.org"
    },
    {
      "numberrange": 21166663,
      "name": "Illiana Clements",
      "alphanumeric": "EVJ84ZUV6FO",
      "phone": "(500) 404-4771",
      "email": "lorem.vehicula@google.net"
    },
    {
      "numberrange": 16619835,
      "name": "Wendy Jordan",
      "alphanumeric": "NEF57MPM8VX",
      "phone": "1-974-331-2351",
      "email": "aliquam@icloud.org"
    },
    {
      "numberrange": 68505581,
      "name": "Lewis Atkinson",
      "alphanumeric": "TXX84MGK3CR",
      "phone": "1-677-540-7459",
      "email": "consectetuer.ipsum@icloud.com"
    },
    {
      "numberrange": 76618066,
      "name": "Wang Johnson",
      "alphanumeric": "OBU96NZH4MO",
      "phone": "1-728-654-0238",
      "email": "adipiscing.fringilla@outlook.edu"
    },
    {
      "numberrange": 55973766,
      "name": "Christine Dixon",
      "alphanumeric": "QQP09TWF5GU",
      "phone": "1-108-163-5232",
      "email": "nunc.laoreet@aol.org"
    },
    {
      "numberrange": 17616515,
      "name": "Kyle Kennedy",
      "alphanumeric": "SWN34UZG9CB",
      "phone": "1-878-790-4738",
      "email": "egestas.lacinia@google.net"
    },
    {
      "numberrange": 14706868,
      "name": "Micah Savage",
      "alphanumeric": "FUD26YOW0NQ",
      "phone": "(316) 844-3670",
      "email": "sem@hotmail.ca"
    },
    {
      "numberrange": 32987777,
      "name": "Vivien Beard",
      "alphanumeric": "KSR21NUR3KG",
      "phone": "1-553-455-8217",
      "email": "et.nunc.quisque@icloud.net"
    },
    {
      "numberrange": 10687785,
      "name": "Xanthus Woodward",
      "alphanumeric": "LIP66THD8SQ",
      "phone": "(444) 664-5550",
      "email": "dapibus.ligula@yahoo.ca"
    },
    {
      "numberrange": 77100140,
      "name": "Macy Guy",
      "alphanumeric": "IDC63WJY8KW",
      "phone": "1-470-593-5612",
      "email": "auctor.velit@protonmail.com"
    },
    {
      "numberrange": 36997336,
      "name": "Stuart Noel",
      "alphanumeric": "ATG09RWR3PT",
      "phone": "1-265-814-5887",
      "email": "cursus.a.enim@protonmail.edu"
    },
    {
      "numberrange": 93964640,
      "name": "Daphne Salazar",
      "alphanumeric": "DDU71AZH5WL",
      "phone": "(532) 611-6754",
      "email": "lobortis@google.com"
    },
    {
      "numberrange": 77599470,
      "name": "Dean Gamble",
      "alphanumeric": "VQI85WSU7PW",
      "phone": "(754) 277-9212",
      "email": "vestibulum.neque@outlook.com"
    },
    {
      "numberrange": 18932390,
      "name": "Vincent Powers",
      "alphanumeric": "BRG62PJT5IQ",
      "phone": "(368) 217-7273",
      "email": "fusce.aliquam.enim@aol.edu"
    },
    {
      "numberrange": 93782527,
      "name": "Alden Kramer",
      "alphanumeric": "HQE32LOQ6HD",
      "phone": "1-493-454-2276",
      "email": "libero.et@aol.couk"
    },
    {
      "numberrange": 94219394,
      "name": "Meredith Middleton",
      "alphanumeric": "GBZ27BCT6XQ",
      "phone": "1-903-687-1357",
      "email": "ac.orci.ut@yahoo.edu"
    },
    {
      "numberrange": 62888880,
      "name": "Dahlia Woodard",
      "alphanumeric": "OND36JAA8HF",
      "phone": "(557) 267-8925",
      "email": "metus.in@aol.edu"
    },
    {
      "numberrange": 29025901,
      "name": "Martha Schwartz",
      "alphanumeric": "DLO83QVI0HM",
      "phone": "(111) 524-6734",
      "email": "pede.nonummy.ut@icloud.couk"
    },
    {
      "numberrange": 16274390,
      "name": "Neil Meadows",
      "alphanumeric": "NFT51LAK3SD",
      "phone": "(812) 950-2158",
      "email": "montes.nascetur@outlook.couk"
    },
    {
      "numberrange": 73394356,
      "name": "Dexter Ashley",
      "alphanumeric": "WTX93UYH3DC",
      "phone": "1-517-713-4982",
      "email": "tellus.justo@protonmail.net"
    },
    {
      "numberrange": 3844423,
      "name": "Flavia Lawrence",
      "alphanumeric": "PKT31MLF4SB",
      "phone": "1-539-955-3451",
      "email": "mauris.ipsum@outlook.ca"
    },
    {
      "numberrange": 83849684,
      "name": "Theodore Lindsay",
      "alphanumeric": "VEV64ICC6PN",
      "phone": "(170) 237-1813",
      "email": "leo.morbi.neque@aol.net"
    },
    {
      "numberrange": 59457364,
      "name": "Celeste Vincent",
      "alphanumeric": "LPD76IVB2UE",
      "phone": "(849) 327-7224",
      "email": "sed@aol.net"
    },
    {
      "numberrange": 71023034,
      "name": "Ignacia Horn",
      "alphanumeric": "HQO26XFY2FA",
      "phone": "1-562-979-4006",
      "email": "sapien.imperdiet@hotmail.net"
    },
    {
      "numberrange": 48069397,
      "name": "Sigourney Chase",
      "alphanumeric": "PYJ83VKC0XR",
      "phone": "(525) 412-8675",
      "email": "et.pede@protonmail.edu"
    },
    {
      "numberrange": 34867246,
      "name": "Dante Hickman",
      "alphanumeric": "RLP48AQB5GJ",
      "phone": "1-775-301-3136",
      "email": "lobortis@hotmail.couk"
    },
    {
      "numberrange": 73962636,
      "name": "Nehru Ryan",
      "alphanumeric": "TMH17INO8YJ",
      "phone": "1-721-377-7254",
      "email": "semper.erat@icloud.couk"
    },
    {
      "numberrange": 68301692,
      "name": "Piper Barlow",
      "alphanumeric": "BDS46SSY5ZV",
      "phone": "(734) 281-0422",
      "email": "ad.litora@yahoo.couk"
    },
    {
      "numberrange": 67741545,
      "name": "Irene Randall",
      "alphanumeric": "TPL71LTT9RU",
      "phone": "1-735-339-5806",
      "email": "est@outlook.org"
    },
    {
      "numberrange": 15267111,
      "name": "Cleo Chase",
      "alphanumeric": "WUA48JFA8FE",
      "phone": "1-163-453-1217",
      "email": "vestibulum.accumsan@google.net"
    },
    {
      "numberrange": 19423851,
      "name": "Edan Holloway",
      "alphanumeric": "HPK10LJB8BM",
      "phone": "1-440-510-1717",
      "email": "duis.dignissim@hotmail.net"
    },
    {
      "numberrange": 98095916,
      "name": "Macaulay Osborn",
      "alphanumeric": "KKM56LKO1LS",
      "phone": "(766) 413-3438",
      "email": "porttitor.vulputate@icloud.ca"
    },
    {
      "numberrange": 66825656,
      "name": "Jared Lynn",
      "alphanumeric": "VLW53NTJ2MJ",
      "phone": "1-121-319-5086",
      "email": "malesuada.fames@google.ca"
    },
    {
      "numberrange": 17559820,
      "name": "Ima Cochran",
      "alphanumeric": "KJT22AEL3OI",
      "phone": "(271) 400-2977",
      "email": "erat@yahoo.couk"
    },
    {
      "numberrange": 32774351,
      "name": "Malachi Robinson",
      "alphanumeric": "MIR65DCH2JY",
      "phone": "1-302-958-5662",
      "email": "duis@protonmail.org"
    },
    {
      "numberrange": 73993083,
      "name": "Denise Potts",
      "alphanumeric": "XYE92ITH6NA",
      "phone": "(232) 770-1959",
      "email": "lacinia@outlook.ca"
    },
    {
      "numberrange": 72376600,
      "name": "Jared Rivers",
      "alphanumeric": "NRN21IBF2CM",
      "phone": "1-230-461-8962",
      "email": "vitae.nibh.donec@yahoo.com"
    },
    {
      "numberrange": 60511036,
      "name": "Malik Battle",
      "alphanumeric": "EAH75KAL9AQ",
      "phone": "(715) 361-2639",
      "email": "erat.vivamus@outlook.org"
    },
    {
      "numberrange": 33453994,
      "name": "Nita Witt",
      "alphanumeric": "EQB24QDH6TD",
      "phone": "1-837-329-6962",
      "email": "sodales@protonmail.org"
    },
    {
      "numberrange": 46098288,
      "name": "Geoffrey Valdez",
      "alphanumeric": "BOW71KDJ6EY",
      "phone": "(821) 844-1113",
      "email": "at@hotmail.couk"
    },
    {
      "numberrange": 35337060,
      "name": "Hammett Calderon",
      "alphanumeric": "UJE23SMT3QP",
      "phone": "1-257-960-3153",
      "email": "ullamcorper.velit@hotmail.couk"
    },
    {
      "numberrange": 44278709,
      "name": "Ahmed Brady",
      "alphanumeric": "DBD22QIZ0FL",
      "phone": "1-355-965-1871",
      "email": "adipiscing@protonmail.org"
    },
    {
      "numberrange": 56033678,
      "name": "Medge Odom",
      "alphanumeric": "XVC54NFC6OT",
      "phone": "(756) 124-2749",
      "email": "lobortis@outlook.ca"
    },
    {
      "numberrange": 25944218,
      "name": "Prescott Austin",
      "alphanumeric": "DBY42UVU3ID",
      "phone": "1-723-662-6648",
      "email": "sociis.natoque@hotmail.org"
    },
    {
      "numberrange": 29228944,
      "name": "Jamal Brown",
      "alphanumeric": "ZBQ77XGD1ER",
      "phone": "1-615-176-5452",
      "email": "torquent@aol.com"
    },
    {
      "numberrange": 51728529,
      "name": "Nehru Snyder",
      "alphanumeric": "WWM69BDK4KJ",
      "phone": "1-471-587-0275",
      "email": "donec.tempor@google.edu"
    },
    {
      "numberrange": 82572973,
      "name": "Keefe O'connor",
      "alphanumeric": "BFR11FEE2XF",
      "phone": "1-148-522-3057",
      "email": "mauris@yahoo.org"
    },
    {
      "numberrange": 38530817,
      "name": "Alea Harrell",
      "alphanumeric": "WHL43MSR5AL",
      "phone": "1-945-248-0842",
      "email": "lorem.eget@protonmail.couk"
    },
    {
      "numberrange": 82750241,
      "name": "Maggy Stone",
      "alphanumeric": "IZI88ZKN3GS",
      "phone": "(418) 372-3340",
      "email": "non@google.net"
    },
    {
      "numberrange": 97217205,
      "name": "Lester Montoya",
      "alphanumeric": "XTM16CIV3BT",
      "phone": "1-827-242-2755",
      "email": "ornare.in@google.org"
    }
  ]
  return (
    <div className='flex justify-center flex-col'>
      <SearchBar></SearchBar>
      <table>
        <thead>
          <tr >
            <th>Identificación</th>
            <th>Nombre completo</th>
            <th>Tipificación</th>
            <th>Contacto</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((dummy, index)=>
            <tr key={index}>
              <td>{dummy.numberrange}</td>
              <td>{dummy.name}</td>
              <td>{dummy.alphanumeric}</td>
              <td style={{color:'#002A54'}}>
               <a href={"https://api.whatsapp.com/send?phone=" + dummy.phone.replaceAll(/([() -])/g, "")} target="_blank" className='underline'>{dummy.phone}</a>
              <br/>
              <a href={"mailto:"+dummy.email} target="_blank" className='underline'  >{dummy.email}</a>
              </td>
              <td>al rato lo pongo</td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}
