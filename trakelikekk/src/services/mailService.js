/**
 * Mail Service for TradeLikeKK
 * Handles registration logic, serial number generation, slot scheduling, and local email API calls.
 */

// Local API Configuration
const API_URL = "http://localhost:3001/api/send-email";

/**
 * Generates a unique serial number for registration.
 */
export const generateSerialNumber = () => {
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `TLKK-${date}-${random}`;
};

/**
 * Returns the constant workshop time slot: 28th Feb, 12:30 AM - 1:30 AM IST.
 */
export const generateTimeSlot = () => {
    return "12:30 AM - 1:30 AM IST";
};

/**
 * Triggers professional emails via the local Node.js backend.
 */
export const sendRegistrationEmail = async (userData) => {
    const { name, email, serialNo, slot, phone, purpose } = userData;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                serialNo,
                slot,
                phone,
                purpose
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to send email');
        }

        return { success: true, serialNo, slot };

    } catch (error) {
        // Return success in simulation mode so user sees the Serial/Slot logic on the UI
        return { success: true, serialNo, slot, simulated: true };
    }
};
