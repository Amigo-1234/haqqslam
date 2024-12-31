self.addEventListener('push', function(event) {
    let options = {
      body: event.data.text(),
      icon: 'image.png',
      badge: 'image.png'
    };
    
    event.waitUntil(
      self.registration.showNotification('Prayer Time', options)
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Add behavior for when the notification is clicked
  });
  