export default function getColor(user) {
    if (user.health > 50) {
        return 'healthy'
    } else if (user.health >= 15) {
        return 'wounded'
    }
    return 'critical'
}