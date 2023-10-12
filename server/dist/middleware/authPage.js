"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPageMiddelwear = void 0;
const authPageMiddelwear = (permission) => {
    return (req, res, next) => {
        const token = req.header.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try {
            // 2. Verify and decode the JWT token
            const decodedToken = jwt.verify(token);
            // 3. Retrieve the user's role from the decoded token
            const userRole = decodedToken.role; // Replace 'role' with the actual claim name for user role
            // 4. Check if the user's role matches the required role
            if (userRole !== permission) {
                return res.status(403).json({ message: 'Access denied' });
            }
            // If all checks pass, allow access to the protected route
            next();
        }
        catch (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    };
};
exports.authPageMiddelwear = authPageMiddelwear;
