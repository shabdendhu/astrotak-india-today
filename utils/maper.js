import moment from "moment";

const maper = {
  relativeData: (obj) => {
    return {
      id: obj.uuid,
      name: obj.firstName,
      dob: moment(obj.dateAndTimeOfBirth).format("YYYY-MM-DD"),
      tob: moment(obj.dateAndTimeOfBirth).format("hh:mm"),
      relation: obj.relation,
    };
  },
  relativeList: (arr) => {
    return arr.map((e) => {
      return maper.relativeData(e);
    });
  },
  addRealtiveData: (obj) => {
    return {
      birthDetails: {
        dobDay: parseInt(moment(obj.dob).format("DD")),
        dobMonth: parseInt(moment(obj.dob).format("MM")),
        dobYear: parseInt(moment(obj.dob).format("YYYY")),
        tobHour: parseInt(moment(obj.tob).format("hh")),
        tobMin: parseInt(moment(obj.tob).format("mm")),
        meridiem: moment(obj.tob).format("A"),
      },
      birthPlace: {
        placeName: obj.birthPlace.placeName,
        placeId: obj.birthPlace.placeId,
      },
      firstName: obj.name,
      lastName: obj.name,
      relationId: obj.relation,
      gender: obj.gender,
    };
  },
  editObj: (obj) => {
    return {
      name: obj.firstName,
      dob: moment([
        obj.birthDetails.dobYear,
        obj.birthDetails.dobMonth,
        obj.birthDetails.dobDay,
      ]),
      tob: moment({
        hour: obj.birthDetails.tobHour,
        minute: obj.birthDetails.tobMin,
      }),
      placeOfBirth: obj.birthPlace.placeName,
      gender: obj.gender,
      relation: {
        key: obj.relationId,
        label: obj.relation,
        value: obj.relationId,
      },
    };
  },
};
export default maper;
