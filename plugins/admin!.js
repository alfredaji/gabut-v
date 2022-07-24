let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Bot bukan admin kak'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
