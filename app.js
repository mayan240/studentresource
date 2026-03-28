// ═══════════════════════════════════════════════════
// StudyForge — Main Application Logic
// ═══════════════════════════════════════════════════
const PAPERS = [
  {subject:'Basic Mathematics',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/basic%20mathematics%201/bbc111_tbc111_endsem_2025_dec.pdf'},
  {subject:'C Programming',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/end/tbc101_tbi101_endsem_2023_jan.pdf'},
  {subject:'C Programming',sem:1,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/end/tbc102_tbd102_endsem_2023_dec.pdf'},
  {subject:'C Programming',sem:1,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/end/tbc102_tbd102_endsem_2024_dec.pdf'},
  {subject:'C Programming',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/end/tbc102_tbi102_endsem_2025_dec.pdf'},
  {subject:'C Programming',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/end/tbs101_endsem_2023_jan.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbc101_tbi101_midsem_2021.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2022,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbc101_tbi101_midsem_2022_nov.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbc101_tbi101_midsem_2023_jan.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbc102_tbd102_midsem_2023_oct.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbc102_tbi102_midsem_2025_sep.pdf'},
  {subject:'C Programming',sem:1,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/c/mid/tbd102_midsem_2024_oct.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/end/tbc101_tbd101_endsem_2023_dec.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/end/tbc101_tbd101_endsem_2024_dec.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/end/tbc101_tbd101_endsem_2025_dec.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/end/tbc102_tbi102_endsem_2023_jan.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc101_midsem_2024_oct.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc101_tbd101_midsem_2023_oct.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc101_tbd101_tbl101_midsem_2025_nov.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc101_tbd101_tbl101_midsem_2025_sep.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc102_tbi101_midsem_2021.pdf'},
  {subject:'Fundamentals of IT',sem:1,type:'mid',year:2022,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/computationl%20thinking%20and%20fundamentals%20of%20it/mid/tbc102_tbi102_midsem_2022_nov.pdf'},
  {subject:'Math Foundation for AI',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20for%20ai/end/tbd103_endsem_2025_dec.pdf'},
  {subject:'Math Foundation for AI',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20for%20ai/mid/tbd103_midsem_2025_sep.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbc103_endsem_2023_jan.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbc103_endsem_2025_dec.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbc103_tbd103_endsem_2023_dec.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbc103_tbd103_endsem_2024_dec.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbi103_endsem_2023_jan.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/end/tbs103_endsem_2023_jan.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2021.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2022,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2022_nov.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2023_jan.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2023_oct.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2024_oct.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2025_nov.pdf'},
  {subject:'Math Foundation of CS',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/mathematical%20foundation%20of%20computer%20science/mid/tbc103_midsem_2025_sep_20.pdf'},
  {subject:'Professional English',sem:1,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/end/tbc104_tbd104_tbi104_tbl104_endsem_2024_dec.pdf'},
  {subject:'Professional English',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/end/tbc104_tbd104_tbi104_tbl104_endsem_2025_dec.pdf'},
  {subject:'Professional English',sem:1,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/end/thu101_endsem_2023_dec.pdf'},
  {subject:'Professional English',sem:1,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/end/thu101_tbs104_endsem_2023_jan.pdf'},
  {subject:'Professional English',sem:1,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/mid/tbc104_midsem_2024_oct.pdf'},
  {subject:'Professional English',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/mid/tbc104_midsem_2025_sep_18.pdf'},
  {subject:'Professional English',sem:1,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/mid/thu101_midsem_2021.pdf'},
  {subject:'Professional English',sem:1,type:'mid',year:2022,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/mid/thu101_midsem_2022_nov.pdf'},
  {subject:'Professional English',sem:1,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/professional%20communication%201/mid/thu101_midsem_2023_oct.pdf'},
  {subject:'Python Programming',sem:1,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/python%20programming/end/tbc102_tbl102_endsem_2025_dec.pdf'},
  {subject:'Python Programming',sem:1,type:'mid',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/python%20programming/mid/tbd102_tbl102_midsem_2025_nov.pdf'},
  {subject:'Python Programming',sem:1,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%201/python%20programming/mid/tbd102_tbl102_midsem_2025_sep.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/end/tbc204_endsem_2024_jun.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'end',year:2022,month:'JUL',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/end/tbc205_endsem_2022_jul.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/end/tbc206_endsem_2023_jun.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/mid/tbc204_midsem_2024_apr.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/mid/tbc205_midsem_2022.pdf'},
  {subject:'Discrete Mathematics',sem:2,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/discrete%20mathematics/mid/tbc206_midsem_2023_apr.pdf'},
  {subject:'Foundations of AI',sem:2,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/foundations%20of%20ai/end/tbc331_endsem_2025_dec.pdf'},
  {subject:'Foundations of AI',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/foundations%20of%20ai/end/tbd203_endsem_2025_jun.pdf'},
  {subject:'Foundations of AI',sem:2,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/foundations%20of%20ai/mid/tbc311_midsem_2025_sep.pdf'},
  {subject:'Foundations of AI',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/foundations%20of%20ai/mid/tbd203_midsem_2025_mar.pdf'},
  {subject:'Python Programming',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/fundamentals%20of%20python%20programming/end/tbc211_endsem_2025_jun.pdf'},
  {subject:'Python Programming',sem:2,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/fundamentals%20of%20python%20programming/end/tbc304_endsem_2024_dec.pdf'},
  {subject:'Python Programming',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/fundamentals%20of%20python%20programming/mid/tbc211_midsem_2025_mar.pdf'},
  {subject:'Python Programming',sem:2,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/fundamentals%20of%20python%20programming/mid/tbc304_midsem_2024_oct.pdf'},
  {subject:'Python Programming',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/fundamentals%20of%20python%20programming/mid/tbd202_midsem_2025_mar.pdf'},
  {subject:'Intro to Data Science',sem:2,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/introduction%20to%20data%20science/end/tbd303_endsem_2025_dec.pdf'},
  {subject:'Intro to Data Science',sem:2,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/introduction%20to%20data%20science/mid/tbd303_midsem_2025_sep.pdf'},
  {subject:'OOP Using C++',sem:2,type:'end',year:2022,month:'JUL',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/end/tbc202_endsem_2022_jul.pdf'},
  {subject:'OOP Using C++',sem:2,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/end/tbc202_endsem_2024_jun.pdf'},
  {subject:'OOP Using C++',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/end/tbc202_endsem_2025_jun.pdf'},
  {subject:'OOP Using C++',sem:2,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/end/tbc203_endsem_2023_jun.pdf'},
  {subject:'OOP Using C++',sem:2,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/mid/tbc202_midsem_2022_apr.pdf'},
  {subject:'OOP Using C++',sem:2,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/mid/tbc202_midsem_2024_apr.pdf'},
  {subject:'OOP Using C++',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/mid/tbc202_midsem_2025_mar.pdf'},
  {subject:'OOP Using C++',sem:2,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/oop%20using%20cpp/mid/tbc203_midsem_2023_apr.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2022,month:'JUL',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc203_endsem_2022_jul.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2024,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc203_endsem_2024.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc203_endsem_2024_jun.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc203_endsem_2025_jun.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc204_endsem_2023_jun.pdf'},
  {subject:'Operating Systems',sem:2,type:'end',year:2022,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/end/tbc404_endsem_2022_jun.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc203_midsem_2022.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc203_midsem_2024_apr.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc203_midsem_2025_mar.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc204_midsem_2023_apr.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc404_midsem_2021.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbc404_midsem_2022_apr.pdf'},
  {subject:'Operating Systems',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/operating%20system/mid/tbd212_midsem_2025_mar.pdf'},
  {subject:'Probability & Statistics',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/probability%20and%20statistics/end/tbc204_endsem_2025_jun.pdf'},
  {subject:'Probability & Statistics',sem:2,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/probability%20and%20statistics/mid/tbc204_midsem_2025_mar.pdf'},
  {subject:'Problem Solving',sem:2,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%202/programming%20for%20problem%20solving/end/tbc205_endsem_2025_jun.pdf'},
  {subject:'Career Skills',sem:3,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/career%20skills/mid/xbc301_midsem_2022_setA.pdf'},
  {subject:'Career Skills',sem:3,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/career%20skills/mid/xbc301_midsem_2022_setB.pdf'},
  {subject:'Career Skills',sem:3,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/career%20skills/mid/xbc301_midsem_2023_oct_setA.pdf'},
  {subject:'Career Skills',sem:3,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/career%20skills/mid/xbc301_midsem_2023_oct_setB.pdf'},
  {subject:'Data Structures',sem:3,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/end/tbc201_endsem_2024_jun.pdf'},
  {subject:'Data Structures',sem:3,type:'end',year:2022,month:'JUL',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/end/tbc201_tbi201_endsem_2022_jul.pdf'},
  {subject:'Data Structures',sem:3,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/end/tbc201_tbi201_tbs201_endsem_2023_jun.pdf'},
  {subject:'Data Structures',sem:3,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/end/tbc301_tbd301_tbi303_tbl305_endsem_2025_dec.pdf'},
  {subject:'Data Structures',sem:3,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/mid/tbc201_midsem_2022.pdf'},
  {subject:'Data Structures',sem:3,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/mid/tbc201_midsem_2023_apr.pdf'},
  {subject:'Data Structures',sem:3,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/data%20structures/mid/tbc201_midsem_2024_apr.pdf'},
  {subject:'DBMS',sem:3,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/end/tbc302_endsem_2024_dec.pdf'},
  {subject:'DBMS',sem:3,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/end/tbc302_tbd302_tbi302_endsem_2025_dec.pdf'},
  {subject:'DBMS',sem:3,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/end/tbc302_tbi301_endsem_2023_jan.pdf'},
  {subject:'DBMS',sem:3,type:'end',year:2024,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/end/tbc302_tbi302_tbs303_endsem_2024_jan.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc302_midsem_2024_oct.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc302_tbd302_tbi302_midsem_2025_sep_20.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc302_tbi301_midsem_2022.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc302_tbi302_tbs303_midsem_2023_oct.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc401_midsem_2021.pdf'},
  {subject:'DBMS',sem:3,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/dbms/mid/tbc401_midsem_2022_apr.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'end',year:2022,month:'JUL',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/end/tbc204_tbi202_endsem_2022_jul.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/end/tbc205_tbi205_endsem_2023_jun.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/end/tbc303_endsem_2024_dec.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/end/tbc303_endsem_2025_dec.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/mid/tbc204_midsem_2022.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/mid/tbc205_midsem_2023_apr.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/mid/tbc303_midsem_2024_oct.pdf'},
  {subject:'Digital Logic Design',sem:3,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/digital%20logic%20design/mid/tbc303_midsem_2025_sep_22.pdf'},
  {subject:'Cloud Computing',sem:3,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/fundamentals%20of%20cloud%20computing/end/tbc505_2_endsem_2023_dec.pdf'},
  {subject:'Cloud Computing',sem:3,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/fundamentals%20of%20cloud%20computing/end/tbc505_endsem_2024_dec.pdf'},
  {subject:'Cloud Computing',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/fundamentals%20of%20cloud%20computing/mid/tcs505_2_midsem_2024_oct.pdf'},
  {subject:'Soft Computing',sem:3,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/end/tbc505_3_endsem_2023_dec.pdf'},
  {subject:'Soft Computing',sem:3,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/end/tbc505_3_endsem_2024_dec.pdf'},
  {subject:'Soft Computing',sem:3,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/end/tbd311_endsem_2025_dec.pdf'},
  {subject:'Soft Computing',sem:3,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/mid/tbc505_3_midsem_2023_oct.pdf'},
  {subject:'Soft Computing',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/mid/tbc505_3_midsem_2024_oct.pdf'},
  {subject:'Soft Computing',sem:3,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/introduction%20to%20soft%20computing/mid/tbd311_midsem_2025_sep.pdf'},
  {subject:'Probability & Statistics',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/probability%20and%20statistics/mid/tbc305_midsem_2024_oct.pdf'},
  {subject:'R Programming',sem:3,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/r%20programming/end/tbc305_2_endsem_2024_dec.pdf'},
  {subject:'R Programming',sem:3,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%203/r%20programming/mid/tbc305_2_midsem_2024_oct.pdf'},
  {subject:'Big Data Analytics',sem:4,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/big%20data%20analytics/tbc405_1_endsem_2025_jun.pdf'},
  {subject:'Big Data Analytics',sem:4,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/big%20data%20analytics/tbc405_1_midsem_2025_mar.pdf'},
  {subject:'Career Skills',sem:4,type:'end',year:2023,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/end/xbc401_endsem_2023_setA.pdf'},
  {subject:'Career Skills',sem:4,type:'end',year:2023,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/end/xbc401_endsem_2023_setB.pdf'},
  {subject:'Career Skills',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/end/xbc401_endsem_2024_jun_setA.pdf'},
  {subject:'Career Skills',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/end/xbc401_endsem_2024_jun_setB.pdf'},
  {subject:'Career Skills',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/mid/xbc401_midsem_2022_setB.pdf'},
  {subject:'Career Skills',sem:4,type:'mid',year:2023,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/mid/xbc401_midsem_2023_setA.pdf'},
  {subject:'Career Skills',sem:4,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/mid/xbc401_midsem_2024_mar_setA.pdf'},
  {subject:'Career Skills',sem:4,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/career%20skills/mid/xbc401_midsem_2024_mar_setB.pdf'},
  {subject:'Computer Organization',sem:4,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/end/tbc304_endsem_2023_dec.pdf'},
  {subject:'Computer Organization',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/end/tbc304_endsem_2023_jan.pdf'},
  {subject:'Computer Organization',sem:4,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/end/tbc403_endsem_2025_jun.pdf'},
  {subject:'Computer Organization',sem:4,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/mid/tbc303_midsem_2021.pdf'},
  {subject:'Computer Organization',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/mid/tbc304_midsem_2022.pdf'},
  {subject:'Computer Organization',sem:4,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/mid/tbc304_midsem_2023_oct.pdf'},
  {subject:'Computer Organization',sem:4,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/computer%20organization/mid/tbc403_midsem_2025_mar.pdf'},
  {subject:'Data Analytics (Python)',sem:4,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20analytics%20using%20python/end/tbc401_endsem_2023_jun.pdf'},
  {subject:'Data Analytics (Python)',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20analytics%20using%20python/end/tbc401_endsem_2024_jun.pdf'},
  {subject:'Data Analytics (Python)',sem:4,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20analytics%20using%20python/mid/tbc401_midsem_2023_apr.pdf'},
  {subject:'Data Analytics (Python)',sem:4,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20analytics%20using%20python/mid/tbc401_midsem_2024_apr.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/end/tbc301_endsem_2023_dec.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/end/tbc301_endsem_2023_jan.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'end',year:2022,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/end/tbc402_endsem_2022_jun.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/end/tbc404_endsem_2025_jun.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/mid/tbc301_midsem_2022.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/mid/tbc301_midsem_2023_oct.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/mid/tbc402_midsem_2021.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/mid/tbc402_midsem_2022_apr.pdf'},
  {subject:'Data Comm & Networks',sem:4,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/data%20communication%20and%20computer%20networks/mid/tbc404_midsem_2025_mar.pdf'},
  {subject:'Design & Analysis of Algorithms',sem:4,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/design%20and%20analysis%20of%20algorithms/end/tbc401_endsem_2025_jun.pdf'},
  {subject:'Design & Analysis of Algorithms',sem:4,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/design%20and%20analysis%20of%20algorithms/mid/tbc401_midsem_2025_mar.pdf'},
  {subject:'Management Info System',sem:4,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/management%20information%20system/end/tbc403_endsem_2023_jun.pdf'},
  {subject:'Management Info System',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/management%20information%20system/end/tbc403_endsem_2024_jun.pdf'},
  {subject:'Management Info System',sem:4,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/management%20information%20system/mid/tbc403_endsem_2024_mar.pdf'},
  {subject:'Management Info System',sem:4,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/management%20information%20system/mid/tbc403_midsem_2023_apr.pdf'},
  {subject:'Management Info System',sem:4,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/management%20information%20system/mid/tbc405_3_midsem_2025_mar.pdf'},
  {subject:'Microprocessor',sem:4,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/microprocessor/end/tbc402_endsem_2023_jun.pdf'},
  {subject:'Microprocessor',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/microprocessor/end/tbc402_endsem_2024_jun.pdf'},
  {subject:'Microprocessor',sem:4,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/microprocessor/mid/tbc402_midsem_2023_apr.pdf'},
  {subject:'Microprocessor',sem:4,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/microprocessor/mid/tbc402_midsem_2024_apr.pdf'},
  {subject:'Software Engineering',sem:4,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/end/tbc305_endsem_2023_dec.pdf'},
  {subject:'Software Engineering',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/end/tbc305_endsem_2023_jan.pdf'},
  {subject:'Software Engineering',sem:4,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/end/tbc402_endsem_2025_jun.pdf'},
  {subject:'Software Engineering',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/end/tbc504_endsem_2023_jan.pdf'},
  {subject:'Software Engineering',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/mid/tbc305_midsem_2022.pdf'},
  {subject:'Software Engineering',sem:4,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/mid/tbc305_midsem_2023_oct.pdf'},
  {subject:'Software Engineering',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/software%20engineering/mid/tbc504_midsem_2022.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc301_endsem_2024_dec.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc404_endsem_2023_jun.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc404_endsem_2024_jun.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc501_endsem_2022.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc501_endsem_2023_jan.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbc602_endsem_2023_jun.pdf'},
  {subject:'Web App Development',sem:4,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/end/tbi502_endsem_2023_jan.pdf'},
  {subject:'Web App Development',sem:4,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/mid/tbc301_midsem_2024_oct.pdf'},
  {subject:'Web App Development',sem:4,type:'mid',year:2024,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/mid/tbc404_midsem_2024_apr.pdf'},
  {subject:'Web App Development',sem:4,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/mid/tbc501_midsem_2022.pdf'},
  {subject:'Web App Development',sem:4,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/mid/tbc602_midsem_2022_apr.pdf'},
  {subject:'Web App Development',sem:4,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%204/web%20application%20development/mid/tbc602_midsem_2023_apr.pdf'},
  {subject:'Android Programming',sem:5,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/end/tbc501_endsem_2023_dec.pdf'},
  {subject:'Android Programming',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/end/tbc501_endsem_2024_dec_21.pdf'},
  {subject:'Android Programming',sem:5,type:'end',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/end/tbc502_endsem_2022.pdf'},
  {subject:'Android Programming',sem:5,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/end/tbc502_endsem_2023_jan.pdf'},
  {subject:'Android Programming',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/mid/tbc501_midsem_2023_oct.pdf'},
  {subject:'Android Programming',sem:5,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/mid/tbc501_midsem_2024_oct.pdf'},
  {subject:'Android Programming',sem:5,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/android%20programming/mid/tbc502_midsem_2022.pdf'},
  {subject:'Career Skills',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/career%20skills/end/xbc501_endsem_2024_dec_setA.pdf'},
  {subject:'Career Skills',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/career%20skills/end/xbc501_endsem_2024_dec_setB.pdf'},
  {subject:'Career Skills',sem:5,type:'end',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/career%20skills/end/xbc501_endsem_2025_nov.pdf'},
  {subject:'Career Skills',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/career%20skills/mid/xbc501_midsem_2023_oct_setA.pdf'},
  {subject:'Career Skills',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/career%20skills/mid/xbc501_midsem_2023_oct_setB.pdf'},
  {subject:'Cryptography',sem:5,type:'end',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/end/tbc503_endsem_2022.pdf'},
  {subject:'Cryptography',sem:5,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/end/tbc503_endsem_2023_jan.pdf'},
  {subject:'Cryptography',sem:5,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/end/tbc504_endsem_2023_dec.pdf'},
  {subject:'Cryptography',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/end/tbc504_endsem_2024_dec.pdf'},
  {subject:'Cryptography',sem:5,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/mid/tbc503_midsem_2022.pdf'},
  {subject:'Cryptography',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/mid/tbc504_midsem_2023_oct.pdf'},
  {subject:'Cryptography',sem:5,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/cryptography/mid/tbc504_midsem_2024_oct.pdf'},
  {subject:'Artificial Intelligence',sem:5,type:'end',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/introduction%20to%20ai/tbc502_endsem_2025_nov.pdf'},
  {subject:'Java Programming',sem:5,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/end/tbc303_tbi303_endsem_2023_dec.pdf'},
  {subject:'Java Programming',sem:5,type:'end',year:2023,month:'JAN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/end/tbc303_tbi305_endsem_2023_jan.pdf'},
  {subject:'Java Programming',sem:5,type:'end',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/end/tbc501_endsem_2025_nov_28.pdf'},
  {subject:'Java Programming',sem:5,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/mid/tbc301_midsem_2021.pdf'},
  {subject:'Java Programming',sem:5,type:'mid',year:2022,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/mid/tbc303_midsem_2022.pdf'},
  {subject:'Java Programming',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/mid/tbc303_midsem_2023_oct.pdf'},
  {subject:'Java Programming',sem:5,type:'mid',year:2025,month:'NOV',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/mid/tbc501_midsem_2025_nov.pdf'},
  {subject:'Java Programming',sem:5,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/java%20programming/mid/tbc501_midsem_2025_sep.pdf'},
  {subject:'Microcontrollers',sem:5,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/microcontrollers/end/tbc503_endsem_2025_dec.pdf'},
  {subject:'Microcontrollers',sem:5,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/microcontrollers/mid/tbc503_midsem_2025_sep.pdf'},
  {subject:'OOAD',sem:5,type:'mid',year:2025,month:'SEP',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/object%20oriented%20analysis%20and%20design/tbc505_2_midsem_2025_sep.pdf'},
  {subject:'OOAD',sem:5,type:'end',year:2025,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/object%20oriented%20analysis%20and%20design/tbc505_endsem_2025_dec.pdf'},
  {subject:'Optimization Techniques',sem:5,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/optimization%20techniques/end/tbc503_endsem_2023_dec.pdf'},
  {subject:'Optimization Techniques',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/optimization%20techniques/end/tbc503_endsem_2024_dec_24.pdf'},
  {subject:'Optimization Techniques',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/optimization%20techniques/mid/tbc503_midsem_2023_oct.pdf'},
  {subject:'Optimization Techniques',sem:5,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/optimization%20techniques/mid/tbc503_midsem_2024_oct.pdf'},
  {subject:'.NET Programming',sem:5,type:'end',year:2023,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/programming%20with%20dotnet%20c%20sharp/end/tbc502_endsem_2023_dec.pdf'},
  {subject:'.NET Programming',sem:5,type:'end',year:2024,month:'DEC',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/programming%20with%20dotnet%20c%20sharp/end/tbc502_endsem_2024_dec.pdf'},
  {subject:'.NET Programming',sem:5,type:'mid',year:2023,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/programming%20with%20dotnet%20c%20sharp/mid/tbc502_midsem_2023_oct.pdf'},
  {subject:'.NET Programming',sem:5,type:'mid',year:2024,month:'OCT',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%205/programming%20with%20dotnet%20c%20sharp/mid/tbc502_midsem_2024_oct.pdf'},
  {subject:'Computer Graphics',sem:6,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/end/tbc601_endsem_2023_jun.pdf'},
  {subject:'Computer Graphics',sem:6,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/end/tbc601_endsem_2024_jun.pdf'},
  {subject:'Computer Graphics',sem:6,type:'end',year:2025,month:'MAY',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/end/tbc601_endsem_2025_may_27.pdf'},
  {subject:'Computer Graphics',sem:6,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/mid/tbc601_midsem_2022_apr.pdf'},
  {subject:'Computer Graphics',sem:6,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/mid/tbc601_midsem_2023_apr.pdf'},
  {subject:'Computer Graphics',sem:6,type:'mid',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/mid/tbc601_midsem_2024_jun.pdf'},
  {subject:'Computer Graphics',sem:6,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/mid/tbc601_midsem_2025_mar_24.pdf'},
  {subject:'Computer Graphics',sem:6,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/computer%20graphics/mid/tbc602_midsem_2021.pdf'},
  {subject:'Data Mining & Warehousing',sem:6,type:'end',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/data%20wharehousing%20and%20data%20mining/end/tbc604_1_endsem_2025_jun_3.pdf'},
  {subject:'Data Mining & Warehousing',sem:6,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/data%20wharehousing%20and%20data%20mining/end/tbc604_3_endsem_2023_jun.pdf'},
  {subject:'Data Mining & Warehousing',sem:6,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/data%20wharehousing%20and%20data%20mining/mid/tbc604_1_midsem_2025_mar_27.pdf'},
  {subject:'Data Mining & Warehousing',sem:6,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/data%20wharehousing%20and%20data%20mining/mid/tbc604_3_midsem_2022_apr.pdf'},
  {subject:'Data Mining & Warehousing',sem:6,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/data%20wharehousing%20and%20data%20mining/mid/tbc604_A_midsem_2023_apr.pdf'},
  {subject:'Fundamentals of AI',sem:6,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/fundamentals%20of%20ai/tbc604_3_endsem_2024_jun.pdf'},
  {subject:'Machine Learning',sem:6,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/fundamentals%20of%20machine%20learning/end/tbc603_endsem_2024_jun.pdf'},
  {subject:'Machine Learning',sem:6,type:'end',year:2025,month:'MAY',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/fundamentals%20of%20machine%20learning/end/tbc603_endsem_2025_may_31.pdf'},
  {subject:'Machine Learning',sem:6,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/fundamentals%20of%20machine%20learning/mid/tbc603_midsem_2024_mar.pdf'},
  {subject:'Machine Learning',sem:6,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/fundamentals%20of%20machine%20learning/mid/tbc603_midsem_2025_mar_26.pdf'},
  {subject:'Mobile Computing',sem:6,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/mobile%20computing/end/tbc604_endsem_2024_jun.pdf'},
  {subject:'Mobile Computing',sem:6,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/mobile%20computing/mid/tbc604_midsem_2024_mar.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'end',year:2024,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/end/tbc602_endsem_2024_jun.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'end',year:2025,month:'MAY',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/end/tbc602_endsem_2025_may_29.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'end',year:2023,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/end/tbc603_endsem_2023_jun.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2021,month:'',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc601_midsem_2021.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2024,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc602_midsem_2024_mar.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2025,month:'JUN',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc602_midsem_2025_jun.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2025,month:'MAR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc602_midsem_2025_mar_25.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2022,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc603_midsem_2022_apr.pdf'},
  {subject:'Cyber Security & Laws',sem:6,type:'mid',year:2023,month:'APR',url:'https://raw.githubusercontent.com/gehuhaldwani/pyqs/main/bca/sem%206/network%20security%20and%20cyber%20laws/mid/tbc603_midsem_2023_apr.pdf'}
];


const SEM_BG={1:'#fde8d8',2:'#d8f0fd',3:'#e8d8fd',4:'#d8fde8',5:'#fdf4d8',6:'#f0d8fd'};
const SEM_FG={1:'#e8602a',2:'#2a80e8',3:'#7a2ae8',4:'#2aaa5a',5:'#c87800',6:'#9a2ae8'};
const SEM_LBL=['','Foundations','Core Systems','Applied Dev','Advanced CS','Specialization','Mastery'];

// State
let customPapers=JSON.parse(localStorage.getItem('sf_customPapers')||'[]');
let collections=JSON.parse(localStorage.getItem('sf_collections')||JSON.stringify([{id:1,name:'Favourites',open:true,items:[]},{id:2,name:'Exam Prep',open:false,items:[]}]));
let adminPass=localStorage.getItem('sf_adminPass')||'studyforge2024';
let curSemFilter='all',curSubject=null,curSem=null,curType='end',curYear=null,curUrl=null;
let curTpl='notes',curDiff='END-SEM';
let aiGenerated=false,aiLoadInterval=null;
const AI_MSGS=['Analyzing GEHU exam patterns…','Building knowledge graph…','Generating content from curriculum data…','Cross-referencing topic frequencies…'];

function allPapers(){return[...PAPERS,...customPapers]}
function subjects(){const s=new Set();return allPapers().filter(p=>{const k=p.sem+'-'+p.subject;if(s.has(k))return false;s.add(k);return true})}
function papersFor(sem,subject,type){return allPapers().filter(p=>p.sem==sem&&p.subject==subject&&p.type==type).sort((a,b)=>b.year-a.year)}
function savedKeys(){return new Set(collections.flatMap(c=>c.items))}

function init(){updateStats();renderHomeSemRows();renderBrowseGrid();renderCollections();renderPapersTable()}
function updateStats(){document.getElementById('stat-papers').textContent=allPapers().length;document.getElementById('stat-subjects').textContent=subjects().length}

// Home
function renderHomeSemRows(){
  const c=document.getElementById('home-sem-rows');c.innerHTML='';
  for(let sem=1;sem<=6;sem++){
    const subs=subjects().filter(p=>p.sem==sem);if(!subs.length)continue;
    const w=document.createElement('div');w.style.marginBottom='26px';
    w.innerHTML=`<div class="sh"><div style="display:flex;align-items:center;gap:10px"><span class="sem-badge" style="background:${SEM_BG[sem]};color:${SEM_FG[sem]}">SEM ${sem}</span><div class="sh-title">${SEM_LBL[sem]}</div></div><button class="sh-link" onclick="setSemFilter('${sem}',null);showPage('browse')">See all →</button></div><div class="hscroll" id="hscroll-${sem}"><div class="htrack" id="htrack-${sem}"></div></div>`;
    c.appendChild(w);
    const track=document.getElementById('htrack-'+sem);
    subs.forEach(p=>track.appendChild(makePCard(p)));
    setupDrag(document.getElementById('hscroll-'+sem));
  }
}

function makePCard(p){
  const ends=papersFor(p.sem,p.subject,'end'),mids=papersFor(p.sem,p.subject,'mid');
  const latest=ends[0]||mids[0],count=ends.length+mids.length,saved=savedKeys().has(p.sem+'-'+p.subject);
  const div=document.createElement('div');
  div.className='pcard'+(curSubject===p.subject&&curSem==p.sem?' active-card':'');
  div.style.background=SEM_BG[p.sem];
  if(curSubject===p.subject&&curSem==p.sem)div.style.borderColor=SEM_FG[p.sem];
  div.innerHTML=`${saved?'<div class="pc-saved">✓</div>':''}<div class="pc-yr">SEM ${p.sem} · ${latest?latest.year:'?'}</div><div class="pc-sub">${p.subject}</div><div class="pc-ft"><span class="pc-badge">${count} paper${count!=1?'s':''}</span><span class="pc-count">${latest?latest.month:''}</span></div><div class="pc-arr">→</div>`;
  div.onclick=()=>openSubject(p.sem,p.subject);
  return div;
}

// Browse
function renderBrowseGrid(filter){
  const grid=document.getElementById('browse-grid');grid.innerHTML='';
  let subs=subjects();
  if(filter&&filter!='all')subs=subs.filter(p=>p.sem==filter);
  if(window._searchQ)subs=subs.filter(p=>p.subject.toLowerCase().includes(window._searchQ));
  document.getElementById('browse-count').textContent=subs.length+' subjects';
  if(!subs.length){grid.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--muted)"><div style="font-size:32px;margin-bottom:12px">🔍</div><div style="font-family:var(--fh);font-weight:700;font-size:16px">No subjects found</div></div>';return}
  subs.forEach(p=>grid.appendChild(makePCard(p)));
}

function setSemFilter(val,btn){curSemFilter=val;document.querySelectorAll('#sem-filters .fpill').forEach(b=>b.classList.remove('on'));if(btn)btn.classList.add('on');else document.querySelector(`#sem-filters .fpill[onclick*="'${val}'"]`)?.classList.add('on');renderBrowseGrid(val)}

function handleSearch(q){window._searchQ=q.trim().toLowerCase();document.getElementById('search-clear').style.display=q?'inline':'none';if(q){showPage('browse');renderBrowseGrid(curSemFilter)}}
function clearSearch(){document.getElementById('search-input').value='';window._searchQ='';document.getElementById('search-clear').style.display='none';renderBrowseGrid(curSemFilter)}

// Viewer
function openSubject(sem,subject){
  curSem=sem;curSubject=subject;curType='end';curYear=null;curUrl=null;aiGenerated=false;
  document.getElementById('vm-subject').textContent=subject;
  document.getElementById('vm-meta').textContent=`Sem ${sem}`;
  document.getElementById('vs-title').textContent=subject;
  document.getElementById('run-ai-btn').disabled=false;
  switchViewTab('paper');showPage('viewer');renderVSSidebar();resetPdfView();
  const ends=papersFor(sem,subject,'end'),mids=papersFor(sem,subject,'mid');
  const first=ends[0]||mids[0];if(first)loadPaper(first);
}

function renderVSSidebar(){
  const list=document.getElementById('vs-list');list.innerHTML='';
  const ends=papersFor(curSem,curSubject,'end'),mids=papersFor(curSem,curSubject,'mid');
  if(ends.length){const lbl=document.createElement('div');lbl.className='vs-year-label';lbl.textContent='END SEM';list.appendChild(lbl);ends.forEach(p=>{const btn=document.createElement('button');btn.className='year-btn'+(p.url===curUrl?' on':'');btn.innerHTML=`<span class="yb-yr">${p.year}</span><span class="yb-meta">${p.month}</span>`;btn.onclick=()=>loadPaper(p);list.appendChild(btn)})}
  if(mids.length){const lbl=document.createElement('div');lbl.className='vs-year-label';lbl.textContent='MID SEM';list.appendChild(lbl);mids.forEach(p=>{const btn=document.createElement('button');btn.className='year-btn'+(p.url===curUrl?' on':'');btn.innerHTML=`<span class="yb-yr">${p.year}</span><span class="yb-meta">${p.month}</span>`;btn.onclick=()=>loadPaper(p);list.appendChild(btn)})}
  const others=subjects().filter(s=>s.sem==curSem&&s.subject!==curSubject);
  if(others.length){const lbl=document.createElement('div');lbl.className='vs-sem-label';lbl.textContent='OTHER SUBJECTS — SEM '+curSem;list.appendChild(lbl);others.forEach(s=>{const cnt=papersFor(s.sem,s.subject,'end').length+papersFor(s.sem,s.subject,'mid').length;const item=document.createElement('div');item.className='vs-item';item.innerHTML=`<span class="vs-item-name">${s.subject}</span><span class="vs-item-c">${cnt}</span>`;item.onclick=()=>openSubject(s.sem,s.subject);list.appendChild(item)})}
}

function loadPaper(p){
  curUrl=p.url;curType=p.type;curYear=p.year;aiGenerated=false;
  document.getElementById('vm-meta').textContent=`Sem ${p.sem} · ${p.type==='end'?'End Sem':'Mid Sem'} · ${p.year} ${p.month}`;
  document.getElementById('raw-pdf-link').href=p.url;
  document.querySelectorAll('#vs-list .year-btn').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('#vs-list .year-btn').forEach(b=>{if(b.querySelector('.yb-yr').textContent==p.year&&b.querySelector('.yb-meta').textContent==p.month)b.classList.add('on')});
  showPdfLoading();
  const frame=document.getElementById('pdf-frame');
  // Use Google gview for embedded PDF rendering (works with GitHub raw URLs)
  frame.src=`https://docs.google.com/gview?url=${encodeURIComponent(p.url)}&embedded=true`;
  frame.style.display='block';
  let loaded=false;
  frame.onload=()=>{
    loaded=true;
    hidePdfLoading();
  };
  // After 15s if not visually loaded, show fallback with open/download buttons
  setTimeout(()=>{
    if(!loaded) showPdfFallback(p.url);
  },15000);
  frame.onerror=()=>showPdfFallback(p.url);
}

function resetPdfView(){document.getElementById('pdf-overlay').style.display='flex';document.getElementById('pdf-loading').style.display='none';document.getElementById('pdf-frame').style.display='none';document.getElementById('pdf-frame').src='about:blank'}
function showPdfLoading(){document.getElementById('pdf-overlay').style.display='none';document.getElementById('pdf-loading').style.display='flex';document.getElementById('pdf-frame').style.display='none'}
function hidePdfLoading(){document.getElementById('pdf-loading').style.display='none';document.getElementById('pdf-frame').style.display='block'}
function showPdfFallback(url){document.getElementById('pdf-loading').style.display='none';document.getElementById('pdf-frame').style.display='none';document.getElementById('pdf-overlay').innerHTML=`<div class="pdf-ov-icon">📄</div><div class="pdf-ov-title">PDF Preview</div><div class="pdf-ov-sub">The inline viewer may take a moment to load, or may be blocked by your browser when running locally. On the deployed site, PDFs load directly. You can always open or download the paper:</div><div style="display:flex;gap:10px;margin-top:8px"><a href="${url}" target="_blank" rel="noreferrer"><button class="btn btn-dark">↗ Open PDF</button></a><a href="${url}" download><button class="btn btn-out">⬇ Download</button></a></div>`;document.getElementById('pdf-overlay').style.display='flex'}
function switchViewTab(tab){document.getElementById('tab-paper').classList.toggle('on',tab==='paper');document.getElementById('tab-ai').classList.toggle('on',tab==='ai');document.getElementById('paper-tab-body').style.display=tab==='paper'?'block':'none';document.getElementById('ai-tab-body').style.display=tab==='ai'?'flex':'none'}

// AI — Now powered by StudyForge AI Engine
function setTpl(id,btn){curTpl=id;document.querySelectorAll('#tpl-chips .chip').forEach(c=>c.classList.remove('on'));btn.classList.add('on')}
function setDiff(d,btn){curDiff=d;document.querySelectorAll('#diff-chips .chip').forEach(c=>c.classList.remove('on'));btn.classList.add('on')}

async function runAI(){
  if(!curSubject)return;
  aiGenerated=true;setAiState('loading');
  let msgIdx=0;
  aiLoadInterval=setInterval(()=>{document.getElementById('al-msg').textContent=AI_MSGS[msgIdx%AI_MSGS.length];msgIdx++},1400);
  document.getElementById('al-sub').textContent=curSubject+' · '+curDiff;

  // Simulate processing time for realism
  await new Promise(r=>setTimeout(r,1800+Math.random()*1200));
  clearInterval(aiLoadInterval);

  const AI=window.StudyForgeAI;
  let output='';
  try{
    switch(curTpl){
      case 'notes':output=AI.generateNotes(curSubject,curDiff);break;
      case 'mcq':output=AI.generateMCQs(curSubject,curDiff);break;
      case 'pyq':output=AI.generatePYQPrediction(curSubject,curDiff);break;
      case 'cheatsheet':output=AI.generateCheatSheet(curSubject,curDiff);break;
      case 'studyplan':output=AI.generateStudyPlan(curSubject,curDiff);break;
      case 'flashcards':output=AI.generateFlashcards(curSubject,curDiff);break;
      default:output=AI.generateNotes(curSubject,curDiff);
    }
    // Show confidence
    const confidence=AI.getConfidence(curSubject);
    const confHtml=`<div class="ai-confidence"><div class="ai-conf-label">AI Confidence Level</div><div class="ai-conf-bar"><div class="ai-conf-fill" style="width:${confidence}%"></div></div><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="ai-conf-pct">${Math.round(confidence)}%</span><span class="ai-conf-desc">Based on ${AI.getSubjectData(curSubject)?.units?.length||0} units of curriculum data</span></div></div>`;
    // Topic heat map
    const freq=AI.analyzeTopicFrequency(curSubject).slice(0,12);
    let tagsHtml='<div class="topic-tags">';
    freq.forEach(t=>{tagsHtml+=`<span class="topic-tag ${t.category}">${t.topic} ${Math.round(t.score*100)}%</span>`});
    tagsHtml+='</div>';
    document.getElementById('ai-output-body').innerHTML=confHtml+tagsHtml+'<hr style="margin:20px 0;border:none;border-top:1px solid var(--border)">'+renderMD(output);
    document.getElementById('ai-label').textContent=curTpl.toUpperCase()+' · '+curDiff;
    document.getElementById('copy-ai-btn').style.display='block';
    document.getElementById('copy-ai-btn').dataset.text=output;
    setAiState('output');
  }catch(e){
    document.getElementById('ai-err-msg').textContent='Generation failed: '+e.message;
    setAiState('error');
  }
}

function setAiState(s){['empty','loading','output','error'].forEach(id=>{const el=document.getElementById('ai-state-'+id);if(id==='output')el.style.display=s===id?'flex':'none';else el.style.display=s===id?'flex':'none'})}
function copyAI(){const txt=document.getElementById('copy-ai-btn').dataset.text;if(txt)navigator.clipboard.writeText(txt).then(()=>showToast('Copied ✓'))}

function renderMD(text){
  return text.replace(/^### (.+)$/gm,'<h3>$1</h3>').replace(/^## (.+)$/gm,'<h2>$1</h2>').replace(/^# (.+)$/gm,'<h1>$1</h1>').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/`([^`]+)`/g,'<code>$1</code>').replace(/^> (.+)$/gm,'<blockquote>$1</blockquote>').replace(/^---$/gm,'<hr/>').replace(/^[*-] (.+)$/gm,'<li>$1</li>').replace(/^\d+\. (.+)$/gm,'<li>$1</li>').replace(/✅/g,'<span style="color:#16a34a">✅</span>').replace(/❌/g,'<span style="color:#ef4444">❌</span>').replace(/\n{2,}/g,'</p><p>')
}

// Collections
function saveCurrent(){if(!curSubject)return;const key=curSem+'-'+curSubject;if(savedKeys().has(key)){showToast('Already saved');return}collections[0].items.push(key);saveState();document.getElementById('btn-save-paper').textContent='✓ Saved';renderCollections();showToast('Saved to Favourites ✓')}
function openDrawer(){document.getElementById('drawer-overlay').classList.add('open')}
function closeDrawer(e){if(!e||e.target===document.getElementById('drawer-overlay'))document.getElementById('drawer-overlay').classList.remove('open')}
function addCollection(){const inp=document.getElementById('new-col-input');const name=inp.value.trim();if(!name)return;collections.push({id:Date.now(),name,open:true,items:[]});inp.value='';saveState();renderCollections()}
function renderCollections(){
  const c=document.getElementById('collections-list');c.innerHTML='';
  if(!collections.length){c.innerHTML='<div style="padding:24px;text-align:center;font-size:11px;color:#ccc;letter-spacing:1.8px;text-transform:uppercase">No collections</div>';return}
  collections.forEach((col,ci)=>{const div=document.createElement('div');div.className='col-folder';div.innerHTML=`<div class="cf-head" onclick="toggleCol(${ci})"><span class="cf-name">${col.name}</span><div class="cf-meta"><span>${col.items.length}</span><span>${col.open?'▲':'▼'}</span></div></div><div class="col-list${col.open?' open':''}">${col.items.length===0?'<div style="padding:10px;font-size:11px;color:#ccc;font-style:italic">Empty</div>':''}${col.items.map(key=>{const[sem,...rest]=key.split('-');const sub=rest.join('-');return`<div class="col-item"><div><div class="ci-name" onclick="openSubject(${sem},'${sub.replace(/'/g,"\\'")}');closeDrawer()">${sub}</div><div class="ci-sem">Sem ${sem}</div></div><button class="ci-del" onclick="removeFromCol(${ci},'${key}')">✕</button></div>`}).join('')}</div>`;c.appendChild(div)})
}
function toggleCol(ci){collections[ci].open=!collections[ci].open;saveState();renderCollections()}
function removeFromCol(ci,key){collections[ci].items=collections[ci].items.filter(i=>i!==key);saveState();renderCollections();showToast('Removed')}

// Admin
function adminLogin(){const val=document.getElementById('admin-pass-input').value;if(val===adminPass){document.getElementById('admin-login').style.display='none';document.getElementById('admin-content').style.display='block';document.getElementById('admin-err').textContent=''}else{document.getElementById('admin-err').textContent='Incorrect password.'}}
function adminLogout(){document.getElementById('admin-login').style.display='flex';document.getElementById('admin-content').style.display='none';document.getElementById('admin-pass-input').value=''}
function setAdminTab(tab){['papers','settings'].forEach(t=>{document.getElementById('admin-tab-'+t).style.display=t===tab?'block':'none';document.getElementById('at-'+t).className='btn '+(t===tab?'btn-dark':'btn-out')})}
function addCustomPaper(){const sem=parseInt(document.getElementById('np-sem').value),subject=document.getElementById('np-subject').value.trim(),type=document.getElementById('np-type').value,year=parseInt(document.getElementById('np-year').value),month=document.getElementById('np-month').value,url=document.getElementById('np-url').value.trim();if(!subject||!year||!url){showToast('Fill all required fields');return}customPapers.push({sem,subject,type,year,month,url});saveState();renderPapersTable();updateStats();renderHomeSemRows();renderBrowseGrid(curSemFilter);document.getElementById('np-subject').value='';document.getElementById('np-year').value='';document.getElementById('np-url').value='';showToast('Paper added ✓')}
function deleteCustom(idx){customPapers.splice(idx,1);saveState();renderPapersTable();updateStats();renderHomeSemRows();renderBrowseGrid(curSemFilter);showToast('Deleted')}
function renderPapersTable(){const all=allPapers();document.getElementById('papers-table-title').textContent=`All Papers (${all.length})`;const tbody=document.getElementById('papers-tbody');tbody.innerHTML='';all.forEach((p,i)=>{const isC=i>=PAPERS.length;const tr=document.createElement('tr');tr.innerHTML=`<td style="font-weight:600;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.subject}</td><td>${p.sem}</td><td><span class="tag tag-${p.type}">${p.type.toUpperCase()}</span></td><td>${p.year}</td><td>${p.month}</td><td><button class="btn btn-out btn-sm" onclick="openSubject(${p.sem},'${p.subject.replace(/'/g,"\\'")}');showPage('viewer')">View</button>${isC?`<button class="btn btn-red btn-sm" style="margin-left:4px" onclick="deleteCustom(${i-PAPERS.length})">Del</button>`:''}</td>`;tbody.appendChild(tr)})}
function clearCustomPapers(){customPapers=[];saveState();renderPapersTable();updateStats();renderHomeSemRows();renderBrowseGrid(curSemFilter);showToast('Custom papers cleared')}
function saveNewPass(){const v=document.getElementById('new-pass').value.trim();if(!v){showToast('Enter a password');return}adminPass=v;localStorage.setItem('sf_adminPass',v);document.getElementById('new-pass').value='';showToast('Password updated ✓')}

// Navigation
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById('page-'+id).classList.add('active');document.querySelectorAll('.sb-btn[id^="nav-"]').forEach(b=>b.classList.remove('active'));const nb=document.getElementById('nav-'+id);if(nb)nb.classList.add('active');const titles={home:'StudyForge // Archive',browse:'Browse Papers',viewer:curSubject||'Paper Viewer',admin:'Admin Panel'};document.getElementById('tb-title').textContent=titles[id]||'StudyForge'}

// Utilities
function setupDrag(el){if(!el||el._d)return;el._d=true;let down=false,sx,sl;el.addEventListener('mousedown',e=>{down=true;sx=e.pageX-el.offsetLeft;sl=el.scrollLeft});el.addEventListener('mouseup',()=>down=false);el.addEventListener('mouseleave',()=>down=false);el.addEventListener('mousemove',e=>{if(!down)return;e.preventDefault();el.scrollLeft=sl-(e.pageX-el.offsetLeft-sx)*1.4})}
function saveState(){localStorage.setItem('sf_customPapers',JSON.stringify(customPapers));localStorage.setItem('sf_collections',JSON.stringify(collections))}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}

init();
