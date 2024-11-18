export const createNotification = async (message) => {
    try {
        const response = await fetch('http://localhost:5000/notifications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to create notification');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error creating notification:', error);
        throw error;
    }
}; 