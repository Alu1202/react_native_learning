export type Message = {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadMessages: number;
};
export const messagesData = [
  { id: '1', name: 'Michael Morgan', message: "Yes, it's perfect for me, thanks.", time: '00:21', unreadMessages: 1 },
  { id: '2', name: 'John Doe', message: "Let's schedule a meeting for tomorrow.", time: '10:45', unreadMessages: 2 },
  { id: '3', name: 'Jane Smith', message: "Can you check the new report?", time: '14:30', unreadMessages: 0 },
  { id: '4', name: 'Steve Jobs', message: "The event was amazing, right?", time: '09:50', unreadMessages: 1 },
  { id: '5', name: 'Elon Musk', message: "Are you coming to the office?", time: '08:00', unreadMessages: 0 },
  { id: '6', name: 'Mark Zuckerberg', message: "Don't forget to push the code.", time: '16:20', unreadMessages: 3 },
  { id: '7', name: 'Jeff Bezos', message: "Amazon sale is going live soon!", time: '12:15', unreadMessages: 0 },
  { id: '8', name: 'Bill Gates', message: "Let's discuss next week's schedule.", time: '11:50', unreadMessages: 0 },
  { id: '9', name: 'Sundar Pichai', message: "The Android update is live.", time: '13:25', unreadMessages: 1 },
  { id: '10', name: 'Larry Page', message: "Meeting moved to 3PM.", time: '15:00', unreadMessages: 0 },
  { id: '11', name: 'Sergey Brin', message: "Let's catch up this weekend.", time: '17:45', unreadMessages: 1 },
  { id: '12', name: 'Warren Buffet', message: "Investment strategy call.", time: '10:05', unreadMessages: 0 },
  { id: '13', name: 'Tim Cook', message: "iPhone 15 launch next month.", time: '18:30', unreadMessages: 0 },
  { id: '14', name: 'Satya Nadella', message: "Great job on the new project.", time: '19:15', unreadMessages: 0 },
  { id: '15', name: 'Jack Dorsey', message: "Don't forget to tweet!", time: '20:00', unreadMessages: 2 },
  { id: '16', name: 'Reed Hastings', message: "New Netflix series out!", time: '22:30', unreadMessages: 3 },
  { id: '17', name: 'Sheryl Sandberg', message: "Can we catch up tomorrow?", time: '23:00', unreadMessages: 0 },
  { id: '18', name: 'Susan Wojcicki', message: "YouTube algorithm changes.", time: '07:30', unreadMessages: 0 },
  { id: '19', name: 'Andy Jassy', message: "AWS summit next week.", time: '12:00', unreadMessages: 1 },
  { id: '20', name: 'Marissa Mayer', message: "I'll email the details soon.", time: '16:50', unreadMessages: 0 },
];