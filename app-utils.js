import Toast from "react-native-toast-message";
import userDefaults from "react-native-user-defaults";

const CleverTap = require("clevertap-react-native");

export const showToast = (type, message) => {
    Toast.show({
        type: type, // 'success' | 'error' | 'info'
        text1: message,
        position: "bottom",
        visibilityTime: 3000,
    });
};

export const _handleOpenUrl = (event, from) => {
    console.log("handleOpenUrl", event.url, from);
    // showToast(`handleOpenUrl: ${event.url}, ${from}`);
};

export const onlogin = (navigation) => {
    const props = {
        Name: "Expo",
        Identity: "999",
        Email: "expo@gmail.com",
        Phone: "+918744637221",
        Gender: "M",
        "MSG-email": false,
        "MSG-push": true,
        "MSG-sms": false,
        "MSG-whatsapp": true,
    };

    CleverTap.onUserLogin(props);
    navigation.navigate("Dashboard", {
        name: props.Name,
        identity: props.Identity,
    });
    userDefaults.set(
        "CTProfileIdentity",
        props.Identity,
        "group.ctdemo.ios",
        (err, data) => {
            if (!err) console.log("Saved CTProfileIdentity:", props.Identity);
        },
    );
    userDefaults.set(
        "CTProfileEmail",
        props.Email,
        "group.ctdemo.ios",
        (err, data) => {
            if (!err) console.log("Saved CTProfileEmail:", props.Email);
        },
    );

    console.log("OUL Called");
};

export const handleSubmit = (navigation, user) => {
    const { name, identity, email, phone, gender } = user;

    if (!identity) {
        showToast("error", "Identity is mandatory");
        return;
    }

    CleverTap.onUserLogin({
        Name: name,
        Identity: identity,
        Email: email,
        Phone: phone,
        Gender: gender,
    });

    console.log("OUL Called");
    userDefaults.set(
        "CTProfileIdentity",
        identity,
        "group.ctdemo.ios",
        (err, data) => {
            if (!err) console.log("Saved CTProfileIdentity:", identity);
        },
    );
    userDefaults.set(
        "CTProfileEmail",
        email,
        "group.ctdemo.ios",
        (err, data) => {
            if (!err) console.log("Saved CTProfileEmail:", email);
        },
    );
    navigation.navigate("Dashboard", {
        name: name,
        identity: identity,
    });
};

export const handleNotification = () => {
    showToast("info", "Notification Event");
    console.log("Push Notification");
    CleverTap.recordEvent("Notification Event");
    // CleverTap.recordEvent("Test Event");
};

export const getCleverTap_id = () => {
    CleverTap.getCleverTapID((err, res) => {
        console.log("CleverTapID", res, err);
        alert(`CleverTapID: \n ${res}`);
    });
};

export const pushevent = () => {
    showToast("info", "Event Recorded");
    console.log("Product Viewed Event Recorded");
    CleverTap.recordEvent("Product Viewed");
};

export const multiValueEvent = () => {
    CleverTap.recordEvent("Collection Viewed", {
        Platform: "android",
        "Collection Handle": "rareism-eoss",
        "Collection ID": "293491048519",
        "Collection Page name": "RAREISM EOSS",
        "Collection Title": "RAREISM EOSS",
        "Collection URL": "https://thehouseofrare.com/collections/rareism-eoss",
        Vendor_Source: "APP",
        Category: [
            "TOP",
            "DRESS",
            "TROUSER",
            "T-SHIRT",
            "SHIRT",
            "JEANS",
            "SKIRT",
            "POLO",
            "SHORTS",
            "TRACK PANT",
            "SHRUG",
            "BELT",
            "SWEATER",
            "SWEAT TEE",
            "OUTER WEAR",
            "INNERWEAR",
            "BAG",
            "WAIST COAT",
            "BLAZER",
            "PLAYSUIT",
        ],
        Fabric: [
            "COTTON",
            "POLYESTER",
            "COTTON BLEND",
            "POLYESTER BLEND",
            "VISCOSE BLEND",
            "VISCOSE",
            "SATIN",
            "LINEN",
            "LINEN BLEND",
            "MODAL",
            "100% LINEN",
            "LEATHER",
            "NYLON BLEND",
            "POPLIN",
            "VELVET",
            "MODAL BLEND",
            "RAYON BLEND",
            "ACRYLIC BLEND",
            "WAKANDA",
            "RAYON",
        ],
        Color: [
            "BLACK",
            "MULTI",
            "BLUE",
            "PINK",
            "GREEN",
            "BEIGE",
            "OFF WHITE",
            "WHITE",
            "BROWN",
            "NAVY",
            "PURPLE",
            "YELLOW",
            "OLIVE",
            "MAROON",
            "RED",
            "GREY",
            "ORANGE",
            "RUST",
            "MUSTARD",
            "PEACH",
        ],
        CLOSURE: [
            "PULL-ON",
            "BUTTON",
            "ZIPPER",
            "TIE-UP",
            "DRAWSTRING",
            "HOOK",
            "BUTTON AND ZIP",
            "SHANK AND ZIPPER",
            "ELASTIC",
            "BUCKLE",
            "CROP",
            "WRAP",
            "Zipper",
        ],
        COLLAR: [
            "CREW NECK",
            "V-NECK",
            "SPREAD COLLAR",
            "MANDARIN COLLAR",
            "DROP COLLAR",
            "TIE-UP",
            "HIGH NECK",
            "BOAT NECK",
            "JOHNNY COLLAR",
            "SHOULDER STRAP",
            "COWL NECK",
            "OVERLAP",
            "LAPEL NECK",
            "HALTER NECK",
            "COLLARLESS",
            "TUBE NECK",
            "BAND COLLAR",
            "RUFFLED NECK",
            "ONE SHOULDER",
            "SWEETHEART NECK",
        ],
        FIT: [
            "REGULAR",
            "RELAXED",
            "FIT AND FLARE",
            "FLARED",
            "A-LINE",
            "STRAIGHT",
            "WIDE LEG",
            "BOXY",
            "TAILORED",
            "OVERSIZED",
            "FITTED",
            "TAPERED",
            "SLIM",
            "TALL STRAIGHT",
            "CLASSIC BOOTCUT",
            "SLEEK SKINNY",
            "BOOTCUT",
            "SCULPT HIGH WIDE",
            "BODYCON",
            "WRAP",
        ],
        OCCASION: [
            "CASUAL",
            "BRUNCH",
            "FORMAL",
            "EVENING",
            "RESORT",
            "PARTY",
            "BUSINESS",
            "DESK TO DINNER",
            "SUMMER",
            "WINTER",
            "FESTIVE",
            "EVERYDAY",
            "WORKWEAR",
            "ETHNIC",
            "SEMI FORMAL",
            "TRAVEL",
            "BASICS",
            "CORE",
        ],
        PATTERN: [
            "PLAIN",
            "FLORAL PRINT",
            "ABSTRACT PRINT",
            "GEOMETRIC PRINT",
            "GRAPHIC PRINT",
            "PRINTED",
            "STRIPED",
            "PAISLEY PRINT",
            "POLKA PRINT",
            "TYPOGRAPHY PRINT",
            "EMBROIDERED",
            "SEQUINED",
            "MONOGRAM PRINT",
            "SCHIFFILI",
            "JACQUARD",
            "OMBRE",
            "TROPICAL PRINT",
            "FLANNEL PRINT",
            "DYED",
            "CHECKED",
        ],
        SLEEVE: ["FULL SLEEVE", "HALF SLEEVE", "SLEEVELESS", "3/4TH SLEEVE"],
        "Login Status": "Logged In",
        "Vendor name": "RARERABBIT",
        "Customer Type": "Repeat",
    });
};

export const pushNestedEvent = () => {
    showToast("success", "Nested Event Recorded");
    console.log("Nested Event Recorded");
    CleverTap.recordEvent("Cart View", {
        Platform: "android",
        "Login Status": "Logged In",
        "Customer Type": "Repeat",
        Vendor_Source: "APP",
        Amount: 13298,
        "Cart Source": "PLP",
        items: [
            {
                "Product Title":
                    "Rareism Women's Rumink Pastel Pink Viscose Band Collar Button A-Line Printed Dress",
                "Sub Title": "",
                "Product Handle": "rumink-women-dress-pastel-pink",
                "Product Link":
                    "https://thehouseofrare.com/products/rumink-women-dress-pastel-pink",
                "Product Image Url":
                    "https://cdn.shopify.com/s/files/1/0752/6435/files/8909196742829_1_-hm_540x.webp?v=1780484622",
                "Product ID": "7503873802311",
                "Variant id": "42698014130247",
                Category: "DRESS",
                "Vendor name": "RAREISM",
                Quantity: 1,
                "Stock Availability": 29,
                Size: "XS",
                Color: "PASTEL PINK",
                Fabric: "",
                CLOSURE: "",
                COLLAR: "",
                FIT: "",
                OCCASION: "",
                PATTERN: "",
                SLEEVE: "",
                MRP: 5999,
                "Product Price": 4199,
                "items Product Discount %": 30,
                "App Price": 4199,
                "Rare Points": 83,
                "Total Variants": 7,
            },
            {
                "Product Title":
                    "Rareism Women's Rubinot Dusky Beige 100% Linen Crew Neck Button A-Line Plain Dress",
                "Sub Title": "",
                "Product Handle": "rubinot-womens-dress-dusky-beige",
                "Product Link":
                    "https://thehouseofrare.com/products/rubinot-womens-dress-dusky-beige",
                "Product Image Url":
                    "https://cdn.shopify.com/s/files/1/0752/6435/files/RR289333_1_-hm_540x.webp?v=1781604103",
                "Product ID": "7521422311495",
                "Variant id": "42749414998087",
                Category: "DRESS",
                "Vendor name": "RAREISM",
                Quantity: 1,
                "Stock Availability": 40,
                Size: "XS",
                Color: "DUSKY BEIGE",
                Fabric: "",
                CLOSURE: "",
                COLLAR: "",
                FIT: "",
                OCCASION: "",
                PATTERN: "",
                SLEEVE: "",
                MRP: 12999,
                "Product Price": 9099,
                "items Product Discount %": 30,
                "App Price": 9099,
                "Rare Points": 181,
                "Total Variants": 7,
            },
        ],
    });
};

export const pushChargedEvent = () => {
    showToast("success", "Charged Event Recorded");
    console.log("Charged Event Recorded");

    // Recording an Event
    CleverTap.recordChargedEvent(
        { totalValue: 20, category: "books", purchase_date: new Date() },
        [
            {
                title: "book1",
                published_date: new Date("2010-12-12T06:35:31"),
                author: "ABC",
            },
            { title: "book2", published_date: new Date("2000-12-12T06:35:31") },
            { title: "book3", published_date: new Date(), author: "XYZ" },
        ],
    );
};

// App Inbox
export const show_appInbox = () => {
    CleverTap.recordEvent("App Inbox Event");
    console.log("App Inbox Event Recorded");
    // Show Inbox
    CleverTap.showInbox({
        navBarTitle: "My App Inbox",
        navBarTitleColor: "#FF0000",
        navBarColor: "#FFFFFF",
        inboxBackgroundColor: "#AED6F1",
        backButtonColor: "#00FF00",
        unselectedTabColor: "#0000FF",
        selectedTabColor: "#FF0000",
        selectedTabIndicatorColor: "#000000",
        noMessageText: "No message(s)",
        noMessageTextColor: "#FF0000",
    });
};

export const get_TotalMessageCount = () => {
    // Get the total message count
    CleverTap.getInboxMessageCount((err, res) => {
        console.log("Total Messages: ", res, err);
        showToast("info", `Total Messages: ${res}`);
    });
};

export const get_UnreadMessageCount = () => {
    // Get the count of unread messages
    CleverTap.getInboxMessageUnreadCount((err, res) => {
        console.log("Unread Messages: ", res, err);
        showToast("info", `Unread Messages: ${res}`);
    });
};

//Listeners

// CleverTap Event Handlers
