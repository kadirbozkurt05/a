import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Plus, Trash2 } from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  duration: number;
}

const TimeplannerPage = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newActivity, setNewActivity] = useState('');
  const [duration, setDuration] = useState('');

  const addActivity = () => {
    if (newActivity && duration) {
      setActivities([
        ...activities,
        {
          id: Date.now(),
          name: newActivity,
          duration: parseInt(duration),
        },
      ]);
      setNewActivity('');
      setDuration('');
    }
  };

  const removeActivity = (id: number) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const totalDuration = activities.reduce((sum, activity) => sum + activity.duration, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Clock className="mr-2" />
            Zaman Planlayıcı
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="col-span-2">
              <input
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="Aktivite adı"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Süre (dk)"
                className="w-full p-2 border rounded-lg"
              />
              <button
                onClick={addActivity}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.duration} dakika</p>
                </div>
                <button
                  onClick={() => removeActivity(activity.id)}
                  className="text-red-600 hover:text-red-700 transition-colors"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {activities.length > 0 && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-center text-lg">
                Toplam Süre: <span className="font-bold">{totalDuration} dakika</span>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TimeplannerPage;