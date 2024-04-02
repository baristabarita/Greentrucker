export const initialBookings = [
    {
        id: 1,
        delivery_address: "1234 Main St, City, State",
        booking_date: "2023-04-01",
        est_finish_date: "2023-04-05",
        status: "Pending",
        clientDetails: {
            client_name: "Alex Johnson",
            contact_number: "0915-555-1234",
            email_address: "alex@example.com"
        },
        containerDetails: {
            pickup_location: "Dock 12, Port City",
            container_size: "40'",
            container_quantity: 2,
            container_weight: "28 tons"
        },
        itemDetails: {
            item_type: "Electronics",
            item_quantity: 2000,
            item_weight: "15 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Volvo",
                truck_type: "Flatbed",
                plate_number: "ABC123"
            },
            {
                asset_type: "Trailer",
                measurement: "40'",
                trailer_type: "Enclosed",
                plate_number: "XYZ789"
            }
        ]
    },
    {
        id: 2,
        delivery_address: "5678 Market St, New City, State",
        booking_date: "2023-05-01",
        est_finish_date: "2023-05-07",
        status: "Ongoing",
        clientDetails: {
            client_name: "Maria Garcia",
            contact_number: "555-6789",
            email_address: "garcia@example.com"
        },
        containerDetails: {
            pickup_location: "Warehouse 5, Industrial Park",
            container_size: "20'",
            container_quantity: 5,
            container_weight: "10 tons"
        },
        itemDetails: {
            item_type: "Furniture",
            item_quantity: 100,
            item_weight: "5 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Mercedes",
                truck_type: "Refrigerated",
                plate_number: "DEF456"
            },
            {
                asset_type: "Trailer",
                measurement: "20'",
                trailer_type: "Open Top",
                plate_number: "UVW123"
            },
            {
                asset_type: "Truck",
                brand: "Tesla",
                truck_type: "Electric",
                plate_number: "GHI789"
            }
        ]
    },
    {
        id: 3,
        delivery_address: "1234 Maple Street, Springfield, IL",
        booking_date: "2023-06-10",
        est_finish_date: "2023-06-15",
        status: "Processing",
        clientDetails: {
            client_name: "Alex Johnson",
            contact_number: "312-555-0198",
            email_address: "alex.johnson@example.com"
        },
        containerDetails: {
            pickup_location: "Warehouse A, 100 Industrial Rd, Phoenix, AZ",
            container_size: "20'",
            container_quantity: 1,
            container_weight: "4 tons"
        },
        itemDetails: {
            item_type: "Electronics",
            item_quantity: 500,
            item_weight: "3.5 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Ford",
                truck_type: "Cargo",
                plate_number: "AZR-567J"
            }
        ]
    },
    {
        id: 4,
        delivery_address: "9012 Pine Lane, Boulder, CO",
        booking_date: "2023-07-22",
        est_finish_date: "2023-07-30",
        status: "Reserved",
        clientDetails: {
            client_name: "Maria Garcia",
            contact_number: "303-555-0234",
            email_address: "maria.garcia@example.com"
        },
        containerDetails: {
            pickup_location: "Dock 42, Port of Miami, Miami, FL",
            container_size: "40'",
            container_quantity: 2,
            container_weight: "20 tons"
        },
        itemDetails: {
            item_type: "Furniture",
            item_quantity: 150,
            item_weight: "15 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "40'",
                trailer_type: "Enclosed",
                plate_number: "FLD-890K"
            },
            {
                asset_type: "Truck",
                brand: "Tesla",
                truck_type: "Electric",
                plate_number: "TES-123E"
            }
        ]
    },
    {
        id: 5,
        delivery_address: "5678 Oak Avenue, Madison, WI",
        booking_date: "2023-08-05",
        est_finish_date: "2023-08-12",
        status: "Ongoing",
        clientDetails: {
            client_name: "James Smith",
            contact_number: "608-555-0110",
            email_address: "james.smith@example.com"
        },
        containerDetails: {
            pickup_location: "Storage Unit 15, 2500 Warehouse Ave, Dallas, TX",
            container_size: "40'",
            container_quantity: 3,
            container_weight: "22 tons"
        },
        itemDetails: {
            item_type: "Automotive Parts",
            item_quantity: 1000,
            item_weight: "18 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Mack",
                truck_type: "Flatbed",
                plate_number: "WI-9876M"
            }
        ]
    },
    {
        id: 6,
        client_name: "Sophia Patel",
        delivery_address: "3456 Birch Road, Asheville, NC",
        booking_date: "2023-09-15",
        est_finish_date: "2023-09-22",
        status: "Pending",
        clientDetails: {
            client_name: "Sophia Patel",
            contact_number: "828-555-0147",
            email_address: "sophia.patel@example.com"
        },
        containerDetails: {
            pickup_location: "Factory 7, 370 Manufacturing Ln, Detroit, MI",
            container_size: "20'",
            container_quantity: 4,
            container_weight: "16 tons"
        },
        itemDetails: {
            item_type: "Textiles",
            item_quantity: 2000,
            item_weight: "12 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "20'",
                trailer_type: "Refrigerated",
                plate_number: "NC-1234R"
            },
            {
                asset_type: "Truck",
                brand: "International",
                truck_type: "Refrigerated",
                plate_number: "NC-5678R"
            }
        ]
    },
    {
        id: 7,
        client_name: "Lisa Wong",
        delivery_address: "7890 Elm Drive, Eugene, OR",
        booking_date: "2023-10-01",
        est_finish_date: "2023-10-08",
        status: "Completed",
        clientDetails: {
            client_name: "Lisa Wong",
            contact_number: "541-555-0123",
            email_address: "lisa.wong@example.com"
        },
        containerDetails: {
            pickup_location: "Yard 9, 5500 Logistic Way, Atlanta, GA",
            container_size: "20'",
            container_quantity: 5,
            container_weight: "10 tons"
        },
        itemDetails: {
            item_type: "Medical Supplies",
            item_quantity: 500,
            item_weight: "5 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "20'",
                trailer_type: "Refrigerated",
                plate_number: "OR-7890M"
            }
        ]
    },
    {
        id: 8,
        client_name: "Michael Brown",
        delivery_address: "1357 Cedar Place, Santa Fe, NM",
        booking_date: "2023-11-15",
        est_finish_date: "2023-11-22",
        status: "Reserved",
        clientDetails: {
            client_name: "Michael Brown",
            contact_number: "505-555-0199",
            email_address: "michael.brown@example.com"
        },
        containerDetails: {
            pickup_location: "Terminal 2, 6800 Freight St, Los Angeles, CA",
            container_size: "40'",
            container_quantity: 2,
            container_weight: "25 tons"
        },
        itemDetails: {
            item_type: "Construction Materials",
            item_quantity: 1000,
            item_weight: "20 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Kenworth",
                truck_type: "Dump",
                plate_number: "NM-4523D"
            },
            {
                asset_type: "Trailer",
                measurement: "40'",
                trailer_type: "Flatbed",
                plate_number: "CA-8765F"
            }
        ]
    },
    {
        id: 9,
        client_name: "David Lee",
        delivery_address: "2468 Willow Way, Savannah, GA",
        booking_date: "2023-12-05",
        est_finish_date: "2023-12-12",
        status: "Pending",
        clientDetails: {
            client_name: "David Lee",
            contact_number: "912-555-0101",
            email_address: "d.lee@example.com"
        },
        containerDetails: {
            pickup_location: "Hub 5, 7700 Transport Rd, Philadelphia, PA",
            container_size: "20'",
            container_quantity: 1,
            container_weight: "8 tons"
        },
        itemDetails: {
            item_type: "Artwork",
            item_quantity: 100,
            item_weight: "2 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "20'",
                trailer_type: "Enclosed",
                plate_number: "GA-1234A"
            }
        ]
    },
    {
        id: 10,
        client_name: "Emma Wilson",
        delivery_address: "3690 Magnolia Blvd, Flagstaff, AZ",
        booking_date: "2024-01-15",
        est_finish_date: "2024-01-22",
        status: "Ongoing",
        clientDetails: {
            client_name: "Emma Wilson",
            contact_number: "928-555-0202",
            email_address: "e.wilson@example.com"
        },
        containerDetails: {
            pickup_location: "Depot 12, 8800 Depot Ln, Houston, TX",
            container_size: "40'",
            container_quantity: 3,
            container_weight: "30 tons"
        },
        itemDetails: {
            item_type: "Books",
            item_quantity: 5000,
            item_weight: "25 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Freightliner",
                truck_type: "Box",
                plate_number: "AZ-5678B"
            },
            {
                asset_type: "Truck",
                brand: "Peterbilt",
                truck_type: "Sleeper",
                plate_number: "AZ-9012C"
            }
        ]
    },
    {
        id: 11,
        client_name: "Daniel Kim",
        delivery_address: "4826 Poplar St, Charlottesville, VA",
        booking_date: "2024-02-20",
        est_finish_date: "2024-02-27",
        status: "Completed",
        clientDetails: {
            client_name: "Daniel Kim",
            contact_number: "434-555-0303",
            email_address: "d.kim@example.com"
        },
        containerDetails: {
            pickup_location: "Warehouse B, 9900 Storage Ct, Chicago, IL",
            container_size: "20'",
            container_quantity: 2,
            container_weight: "12 tons"
        },
        itemDetails: {
            item_type: "Electronics",
            item_quantity: 200,
            item_weight: "10 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "20'",
                trailer_type: "Enclosed",
                plate_number: "VA-3456D"
            }
        ]
    },
    {
        id: 12,
        client_name: "Olivia Martinez",
        delivery_address: "5937 Redwood Circle, Ann Arbor, MI",
        booking_date: "2024-03-10",
        est_finish_date: "2024-03-17",
        status: "Reserved",
        clientDetails: {
            client_name: "Olivia Martinez",
            contact_number: "734-555-0410",
            email_address: "olivia.m@example.com"
        },
        containerDetails: {
            pickup_location: "Dock 42, Port of Miami, Miami, FL",
            container_size: "40'",
            container_quantity: 4,
            container_weight: "40 tons"
        },
        itemDetails: {
            item_type: "Agricultural Products",
            item_quantity: 4000,
            item_weight: "38 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Trailer",
                measurement: "40'",
                trailer_type: "Flatbed",
                plate_number: "MI-6789E"
            },
            {
                asset_type: "Trailer",
                measurement: "40'",
                trailer_type: "Flatbed",
                plate_number: "MI-9876F"
            }
        ]
    },
    {
        id: 13,
        client_name: "Ethan Taylor",
        delivery_address: "1024 Vine Street, Nashville, TN",
        booking_date: "2024-04-05",
        est_finish_date: "2024-04-12",
        status: "Processing",
        clientDetails: {
            client_name: "Ethan Taylor",
            contact_number: "615-555-0520",
            email_address: "ethan.t@example.com"
        },
        containerDetails: {
            pickup_location: "Yard 9, 5500 Logistic Way, Atlanta, GA",
            container_size: "20'",
            container_quantity: 2,
            container_weight: "20 tons"
        },
        itemDetails: {
            item_type: "Chemicals",
            item_quantity: 500,
            item_weight: "18 tons"
        },
        assignedAssetDetails: [
            {
                asset_type: "Truck",
                brand: "Volvo",
                truck_type: "Tanker",
                plate_number: "TN-1234G"
            }
        ]
    }
];