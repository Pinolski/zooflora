# 🔐 ZooFlora Admin Sicherheit

## Login-Credentials

**Standard-Credentials:**
- **Username**: `admin`
- **Password**: `ZooFlora2024!Secure`

## ⚠️ WICHTIG: Passwort ändern!

### 1. Für lokale Entwicklung:
```bash
# In deinem Terminal:
export ADMIN_USERNAME="dein_username"
export ADMIN_PASSWORD="dein_sicheres_passwort"
```

### 2. Für Produktion:
```bash
# Setze Umgebungsvariablen auf deinem Server:
export ADMIN_USERNAME="zooflora_admin"
export ADMIN_PASSWORD="SuperSicheresPasswort123!@#"
```

## 🔒 Passwort-Richtlinien

**Verwende ein starkes Passwort mit:**
- Mindestens 12 Zeichen
- Groß- und Kleinbuchstaben
- Zahlen
- Sonderzeichen (!@#$%^&*)
- Keine Wörter aus dem Wörterbuch

**Beispiele für sichere Passwörter:**
- `ZooFlora2024!Secure`
- `Admin@ZooFlora#2024`
- `MyBand!Admin$2024`

## 🚀 Verwendung

1. **Admin öffnen**: `http://localhost:3000/admin` (Weiterleitung)
2. **Geschützten Admin öffnen**: `http://localhost:3000/api/admin`
3. **Browser fragt nach Login** (Basic Auth Dialog)
4. **Credentials eingeben**:
   - Username: `admin`
   - Password: `ZooFlora2024!Secure`
5. **Admin-Interface wird freigeschaltet**

## 🛡️ Sicherheitsfeatures

- **HTTP Basic Auth** - Industriestandard
- **Server-seitige Validierung** - Keine Client-Side Schwachstellen
- **Umgebungsvariablen** - Credentials nicht im Code
- **HTTPS empfohlen** - Für Produktion

## 🔧 Konfiguration

Die Middleware ist in `middleware/auth.js` implementiert und schützt automatisch alle `/admin` Routen.

## 📝 Notizen

- Das Passwort wird **nie** im Code gespeichert
- Credentials können über Umgebungsvariablen geändert werden
- Funktioniert mit allen modernen Browsern
- Keine zusätzlichen Dependencies nötig
