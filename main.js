function process_argv() {
  const { argv } = process;
  const result = studentData(argv[2], argv[3]);

  return result;
}

function studentData(name, studentId) {
  let facultyList = [
    ["Fakultas Ekonomi", "Ekonomi"],
    ["Fakultas Ekonomi", "Manajemen"],
    ["Fakultas Ekonomi", "Akuntansi"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Publik"],
    ["Fakultas Ilmu Sosial dan Politik", "Administrasi Bisnis"],
    ["Fakultas Ilmu Sosial dan Politik", "Hubungan Internasional"],
    ["Fakultas Teknik", "Teknik Sipil"],
    ["Fakultas Teknik", "Arsitektur"],
    ["Fakultas Teknologi Informasi dan Sains", "Matematika"],
    ["Fakultas Teknologi Informasi dan Sains", "Fisika"],
    ["Fakultas Teknologi Informasi dan Sains", "Informatika"],
  ];

  // * Mencari tahun terdaftar
  const year = studentId.substring(0, 4);

  // * Mencari program studi
  let result, facultyName, studyProgramName;

  const studyProgramCode = studentId.substring(4, 6);

  switch (studyProgramCode) {
    case "21":
      studyProgramName = "Ekonomi";
      break;
    case "22":
      studyProgramName = "Manajemen";
      break;
    case "23":
      studyProgramName = "Akuntansi";
      break;
    case "31":
      studyProgramName = "Administrasi Publik";
      break;
    case "32":
      studyProgramName = "Administrasi Bisnis";
      break;
    case "33":
      studyProgramName = "Hubungan Internasional";
      break;
    case "41":
      studyProgramName = "Teknik Sipil";
      break;
    case "42":
      studyProgramName = "Arsitektur";
      break;
    case "51":
      studyProgramName = "Matematika";
      break;
    case "52":
      studyProgramName = "Fisika";
      break;
    case "53":
      studyProgramName = "Informatika";
      break;
    default:
      studyProgramName = null;
  }

  // * Mencari nomor urut mahasiswa
  const studentNumber = studentId.substring(6, studentId.length);

  if (studyProgramName == null) {
    result = "Invalid Student's ID";
  } else {
    facultyList.forEach((row) => {
      if (studyProgramName == row[1]) {
        facultyName = row[0];
      }
    });

    let lecturerName = getLecturer(studyProgramName);

    result = {
      id: studentId,
      name: name,
      prody: studyProgramName,
      faculty: facultyName,
      thesisLecturer: lecturerName,
    };
  }

  return result;
}

function getLecturer(prody) {
  const lecturerList = [
    ["Dr. Ulbert Silalahi, Drs., MA.", "Administrasi Publik"],
    ["Prof. Dr. Martinus Yuwana Marjuka, M.Si.", "Ekonomi"],
    ["Dott. Thomas Anung Basuki, ST., MKom.", "Informatika"],
    ["Dr. Cecilia Lauw Giok Swan, Ir., M.T.", "Teknik Sipil"],
    ["Catharina Tan Lian Soei,Dra.,MM.", "Manajemen"],
    ["Aldyfra Luhulima Lukman, S.T., M.T., Ph.D.", "Arsitektur"],
    ["Sapta Dwikardana, Drs., M.Si., Ph.D.", "Hubungan Internasional"],
    ["Agus, S.Sos., BAC., MBA., M.Phil", "Administrasi Bisnis"],
    ["Dr. Julius Dharma Lesmono, SSi., SE., MT., MSc.", "Matematika"],
    ["Liem Chin, SSi., MSi.", "Fisika"],
    ["Dr. Elizabeth Tiur Manurung, M.Si.,Ak., CA., CIRR.", "Akuntansi"],
  ];

  let lecturerName;

  lecturerList.forEach((row) => {
    if (prody == row[1]) {
      lecturerName = row[0];
    }
  });

  return lecturerName;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = {
  studentData,
  getLecturer,
};
