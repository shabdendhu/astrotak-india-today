import moment from "moment";

const maper = {
  relativeData: (obj) => {
    return {
      name: obj.firstName,
      dob: moment(obj.dateAndTimeOfBirth).format("YYYY-MM-DD"),
      tob:  moment(obj.dateAndTimeOfBirth).format("hh:mm"),
      relation: obj.relation,
    };
  },
  relativeList:(arr)=>{
      return arr.map((e)=>{
          return maper.relativeData(e)
      })
  }
};
export default maper