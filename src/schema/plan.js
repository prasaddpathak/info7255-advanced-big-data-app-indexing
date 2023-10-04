export default {
    "id": "/Plan",
    "type": "object",
    "properties": {
        "planCostShares": { "type": "object" },
        "linkedPlanServices": { "type": "array" },
        "_org": { "type": "string" },
        "objectId": { "type": "string" },
        "objectType": { "type": "string" },
        "planType": { "type": "string" },
        "creationDate": { "type": "string" }
    },
    "required": ["planCostShares", "linkedPlanServices", "_org", "objectId", "objectType", "planType", "creationDate"]
};