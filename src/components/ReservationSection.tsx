import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Users, User, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

const ReservationSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [customGuests, setCustomGuests] = useState(false);
  const [isSending, setIsSending] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !phone || !date || !time) {
    toast.error("Please fill in all fields.");
    return;
  }

  try {
    await emailjs.send(
      "service_1mhkxc7",
      "template_mprnh8f",
      {
        name: name,
        phone: phone,
        date: format(date, "dd.MM.yyyy"),
        time: time,
        guests: guests,
      },
      "b4qlBidT9Wci2culJtmJq"
    );

    toast.success("Reservation sent successfully!");

    setName("");
    setPhone("");
    setDate(undefined);
    setTime("");
    setGuests("2");
  } catch (error) {
    console.error(error);
    toast.error("Error sending reservation.");
  }
};

  return (
    <section id="reservation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2 font-body">
            Reservation
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">
            Book Your Table
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto bg-card rounded-2xl shadow-elevated p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
                <User size={16} className="text-primary" /> Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
                <Phone size={16} className="text-primary" /> Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+359 ..."
                maxLength={20}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
                <CalendarIcon size={16} className="text-primary" /> Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-background border border-border text-sm font-body text-left focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
                <CalendarIcon size={16} className="text-primary" /> Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-background border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow appearance-none",
                  !time && "text-muted-foreground"
                )}
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t} className="text-foreground">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground font-body flex items-center gap-2">
                <Users size={16} className="text-primary" /> Guests
              </label>
              {customGuests ? (
                <input
                  type="number"
                  min={9}
                  max={50}
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Number of guests"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              ) : (
                <select
                  value={guests}
                  onChange={(e) => {
                    if (e.target.value === "more") {
                      setCustomGuests(true);
                      setGuests("9");
                    } else {
                      setGuests(e.target.value);
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                  <option value="more">More +</option>
                </select>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-primary text-primary-foreground py-4 rounded-full text-base font-semibold font-body hover:bg-[#C25416] active:bg-[#D97724] active:text-background hover:text-[#C0C0C0] transition-opacity hover:-translate-y-0.5 active:-translate-y-0 transition-transform duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSending ? "Sending..." : "Reserve Table"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;