import React, { useRef, useEffect } from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import dayjs from "dayjs";

const SchedulerSalas: React.FC = () => {
  const calendarRef = useRef<Calendar>(null);

  const salas = [
    { id: "sala1", name: "Sala 1", color: "#ffffff", bgColor: "#9e5fff" },
    { id: "sala2", name: "Sala 2", color: "#ffffff", bgColor: "#00a9ff" },
    { id: "sala3", name: "Sala 3", color: "#ffffff", bgColor: "#ff5583" },
    { id: "sala4", name: "Sala 4", color: "#ffffff", bgColor: "#03bd9e" },
    { id: "sala5", name: "Sala 5", color: "#ffffff", bgColor: "#bbdc00" },
    { id: "sala6", name: "Sala 6", color: "#ffffff", bgColor: "#9d9d9d" },
    { id: "sala7", name: "Sala 7", color: "#ffffff", bgColor: "#ffbb3b" },
  ];

  useEffect(() => {
    const calendarInstance = calendarRef.current?.getInstance();
    if (!calendarInstance) return;

    calendarInstance.createEvents([
      {
        id: "1",
        calendarId: "sala1",
        title: "Mentoría con Juan Pérez",
        category: "time",
        start: dayjs().hour(9).minute(0).toDate(),
        end: dayjs().hour(10).minute(0).toDate(),
      },
      {
        id: "2",
        calendarId: "sala3",
        title: "Reserva María García",
        category: "time",
        start: dayjs().hour(11).minute(0).toDate(),
        end: dayjs().hour(12).minute(30).toDate(),
      },
      {
        id: "3",
        calendarId: "sala5",
        title: "Mentoría Backend",
        category: "time",
        start: dayjs().hour(15).minute(0).toDate(),
        end: dayjs().hour(16).minute(30).toDate(),
      },
    ]);
  }, []);

  return (
    <div>
      <Calendar
        ref={calendarRef}
        height="800px"
        view="day"
        usageStatistics={false}
        calendars={salas}
        week={{
          startDayOfWeek: 1, // lunes
          workweek: false,   // muestra también fin de semana si cambias a vista week
        }}
        template={{
          timegridDisplayPrimaryTime: ({ time }) => `${time}:00`,
        }}
        isReadOnly={false}
      />
    </div>
  );
};

export default SchedulerSalas;
