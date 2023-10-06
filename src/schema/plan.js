export default {
    "id": "/Plan",
    "type": "object",
    "properties": {
        "planCostShares": {
            "type": "object",
            "properties": {
                "deductible": { "type": "number" },
                "_org": { "type": "string" },
                "copay": { "type": "number" },
                "objectId": { "type": "string" },
                "objectType": { "type": "string" }
            },
            "required": ["deductible", "_org", "copay", "objectId", "objectType"]
        },
        "linkedPlanServices": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "linkedService": {
                        "type": "object",
                        "properties": {
                            "_org": { "type": "string" },
                            "objectId": { "type": "string" },
                            "objectType": { "type": "string" },
                            "name": { "type": "string" }
                        },
                        "required": ["_org", "objectId", "objectType", "name"]
                    },
                    "planserviceCostShares": {
                        "type": "object",
                        "properties": {
                            "deductible": { "type": "number" },
                            "_org": { "type": "string" },
                            "copay": { "type": "number" },
                            "objectId": { "type": "string" },
                            "objectType": { "type": "string" }
                        },
                        "required": ["deductible", "_org", "copay", "objectId", "objectType"]
                    },
                    "_org": { "type": "string" },
                    "objectId": { "type": "string" },
                    "objectType": { "type": "string" }
                },
                "required": ["linkedService", "planserviceCostShares", "_org", "objectId", "objectType"]
            }
        },
        "_org": { "type": "string" },
        "objectId": { "type": "string" },
        "objectType": { "type": "string" },
        "planType": { "type": "string" },
        "creationDate": { "type": "string" }
    },
    "required": ["planCostShares", "linkedPlanServices", "_org", "objectId", "objectType", "planType", "creationDate"]
};