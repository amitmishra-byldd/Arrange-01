import Navbar from "@/components/shared/Navbar";
import TabSection from "@/components/shared/TabSection";
import ConnectCalendar from "@/components/shared/ConnectCalendar";
import Card from "@/components/shared/Card";
import EventSection from "@/components/shared/EventSection";

const cardData = [
  { cardName: "General Scheduling Link" },
  { cardName: "Team Meeting Link" },
  { cardName: "Project Discussion Link" },
  { cardName: "General Scheduling Link" },
  { cardName: "Virtual Meeting Room" },
  { cardName: "General Scheduling Link" },
  { cardName: "Personal Meeting Link" },
  { cardName: "Session Booking Link" },
  { cardName: "Appointment Scheduler" },
  { cardName: "Shared Meeting Room" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-5 py-10 lg:pl-[330px]">
        <div className="flex flex-col lg:gap-8 lg:flex-row lg:justify-between w-full">
          <div className="flex-1 ">
            <TabSection />
            <ConnectCalendar />
            <div className="grid gap-9 md:grid-cols-2  ">
              {cardData.map((items, index) => (
                <span key={index}>
                  <Card cardName={items.cardName} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <EventSection />
          </div>
        </div>
      </div>
    </div>
  );
}
