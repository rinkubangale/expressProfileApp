const getAllUsers = (req, res) => {
  res.status(200).json({
    results: [
      {
        gender: "Male",
        name: { title: "Mr", first: "Rinku", last: "Bangale" },
        location: {
          street: { number: 9594, name: "Linking Rd" },
          city: "Nagpur",
          state: "Maharastra",
          country: "India",
          postcode: 441002,
          coordinates: { latitude: "47.2719", longitude: "-84.3788" },
          timezone: { offset: "+5:30", description: "Mumbai, India" },
        },
        email: "rinku.bangale@example.com",
        login: {
          uuid: "8fef7928-9636-4663-b598-a9e03cf6055f",
          username: "organiclion700",
          password: "finance",
          salt: "KxnxAAoB",
          md5: "a5ce3f384021f0f55e5e2456d70c7f42",
          sha1: "7a8a541038438752409b7fab1f1c785d2f98427a",
          sha256:
            "9f02ea3f7e46065ff7d9145b9a71eafc0bf0bd1f88cd38b6f039659e59c025a6",
        },
        dob: { date: "1998-03-09T10:00:14.675Z", age: 26 },
        registered: { date: "2020-06-09T03:40:44.685Z", age: 4 },
        phone: "7057215258",
        cell: "7090318067",
        id: { name: "UIDAI", value: "922815659863" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/1.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        },
        nat: "IN",
      },
    ],
    info: { seed: "a86f598373579852", results: 1, page: 1, version: "1.4" },
  });
};
const getAllUsersTest = (req, res) => {
  res.status(200).json({
    results: [
      {
        gender: "Male",
        name: { title: "Mr", first: "Akshay", last: "Bangale" },
        location: {
          street: { number: 9594, name: "Linking Rd" },
          city: "Nagpur",
          state: "Maharastra",
          country: "India",
          postcode: 441002,
          coordinates: { latitude: "47.2719", longitude: "-84.3788" },
          timezone: { offset: "+5:30", description: "Mumbai, India" },
        },
        email: "akshay.bangale@example.com",
        login: {
          uuid: "8fef7928-9636-4663-b598-a9e03cf6055f",
          username: "organiclion700",
          password: "finance",
          salt: "KxnxAAoB",
          md5: "a5ce3f384021f0f55e5e2456d70c7f42",
          sha1: "7a8a541038438752409b7fab1f1c785d2f98427a",
          sha256:
            "9f02ea3f7e46065ff7d9145b9a71eafc0bf0bd1f88cd38b6f039659e59c025a6",
        },
        dob: { date: "1996-02-23T10:00:14.675Z", age: 28 },
        registered: { date: "2020-06-09T03:40:44.685Z", age: 4 },
        phone: "7057215258",
        cell: "7090318067",
        id: { name: "UIDAI", value: "922815659863" },
        picture: {
          large: "https://randomuser.me/api/portraits/men/2.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
        },
        nat: "IN",
      },
    ],
    info: { seed: "a86f598373579852", results: 1, page: 1, version: "1.4" },
  });
};

module.exports = { getAllUsers, getAllUsersTest };
