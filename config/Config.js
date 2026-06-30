// ========================================================================
// 🎯 WHITE-LABEL CONFIGURATION GATEWAY FOR PRINT SHOPS
// ========================================================================

const SITE_CONFIG = {
    // 🏪 Store Settings
    STORE_NAME: "High School Printing",
    
    // 🔗 Supabase Configuration Database Parameters
    SUPABASE_URL: "https://irqlvuphoblgjqysteto.supabase.co",
    SUPABASE_KEY: "sb_publishable_-8iwefgyZfbxfF93ZjcFbw_G09EA3U-",
    
    // 💳 Razorpay Online Gateway Public API Key
    RAZORPAY_KEY_ID: "rzp_live_T6wxJ6u8vpDN2u",

    // 💵 CUSTOM PRINT RATES MATRIX
    PRICING: {
        // 📄 A4 Document Print Rates (upload.html)
        A4: {
            BLACK_WHITE: 5, // ₹5 per page
            COLOR: 10       // ₹10 per page
        },
        // 🪪 Aadhaar Card Print Rates (idprint.html)
        AADHAAR: {
            BLACK_WHITE: 10, // ₹5 per copy
            COLOR: 10       // ₹10 per copy
        },
        // 💳 PAN Card Print Rates (pan.html)
        PAN: {
            BLACK_WHITE: 5, // ₹5 per copy
            COLOR: 10       // ₹10 per copy
        }
    }
};

// Saving configurations globally so they seamlessly link with your entire site stack
window.SITE_CONFIG = SITE_CONFIG;
