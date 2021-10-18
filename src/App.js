import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

console.log(user);
console.log(statisticalData);

// const title = '';
export default function App() {
  return (
    <div className="App">
      FE-35 Module 1 Lesson 1
      <Gallery />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={statisticalData.title} stats={statisticalData} />
    </div>
  );
}
