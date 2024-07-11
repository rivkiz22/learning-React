//import logo from "../logo/footer-logo.png.webp";
 import logo from "../logo/ref.jpg";

export const defaultServices = [
  { id: 0, name: "רפלקסולוגיה", price: "300", desciption: "" },
  { id: 1, name: "עיסויים", price: "200", desciption: "" },
  { id: 2, name: "צמחי מרפא", price: "250", desciption: "" },
  { id: 3, name: "תזונה", price: "180", desciption: "" },
];

export const defaultMeetings = [
  {
    id: 0,
    serviceId: 1,
    dateTime: "2021-06-20T10:00:00.000Z",
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",
  },
  {
    id: 1,
    serviceId: 3,
    dateTime: new Date(),
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",
  },
  {
    id: 2,
    serviceId: 3,
    dateTime: "2024-02-21T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",
  },
  {
    id: 3,
    serviceId: 3,
    dateTime: "2024-03-21T10:00:00.000Z", //מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",
  },
];

export const defaultbBusiness = {
  name: "רפואה טבעית",
  address:"זבוטנסקי 1 רמת גן",
  phone: "03-5777777",
  owner: "רבקה לנדאו",
  logo: logo,
  description:
    "ברפואה-משלימה אינטגרטיבית למגוון רחב של בעיות בהתאמה אישית ובפיקוח רפואי.",
};
