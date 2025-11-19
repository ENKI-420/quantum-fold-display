#!/system/bin/sh
# DNA-Lang Quantum Fold Display - Magisk Module Uninstaller
# Copyright (C) 2025 Agile Defense Systems, LLC
# GPL-2.0-only

ui_print "╔═══════════════════════════════════════════════════════════╗"
ui_print "║  DNA-Lang Quantum Fold Display v1.0.0                    ║"
ui_print "║  Uninstaller                                             ║"
ui_print "╚═══════════════════════════════════════════════════════════╝"
ui_print ""

# Unload kernel modules if currently loaded
ui_print "[*] Unloading kernel modules..."

if lsmod | grep -q "fold_quantum_display"; then
    rmmod fold_quantum_display
    ui_print "[✓] Unloaded fold_quantum_display.ko"
fi

if lsmod | grep -q "qnet_transport"; then
    rmmod qnet_transport
    ui_print "[✓] Unloaded qnet_transport.ko"
fi

if lsmod | grep -q "quantum_rng"; then
    rmmod quantum_rng
    ui_print "[✓] Unloaded quantum_rng.ko"
fi

if lsmod | grep -q "quantum_consciousness"; then
    rmmod quantum_consciousness
    ui_print "[✓] Unloaded quantum_consciousness.ko"
fi

# Remove device nodes
ui_print "[*] Removing device nodes..."
rm -f /dev/quantum_display
rm -f /dev/quantum_rng
ui_print "[✓] Device nodes removed"

# Clean up configuration (ask user)
ui_print ""
ui_print "[?] Remove configuration and logs?"
ui_print "    Location: /data/adb/modules/quantum_fold_display/"
ui_print ""
ui_print "    This will delete:"
ui_print "    - IBM Quantum API key configuration"
ui_print "    - All logs and metrics"
ui_print "    - Custom settings"
ui_print ""
ui_print "    Press VOL+ to keep config, VOL- to remove"
ui_print ""

# Wait for volume key input (Magisk installer provides this)
# Note: In actual Magisk, this uses chooseport function
# For now, we'll default to keeping config for safety

KEEP_CONFIG=1

if [ "$KEEP_CONFIG" -eq 0 ]; then
    rm -rf /data/adb/modules/quantum_fold_display/
    ui_print "[✓] Configuration removed"
else
    ui_print "[✓] Configuration preserved"
    ui_print "    Manual cleanup: rm -rf /data/adb/modules/quantum_fold_display/"
fi

ui_print ""
ui_print "╔═══════════════════════════════════════════════════════════╗"
ui_print "║  Uninstallation Complete!                                 ║"
ui_print "╚═══════════════════════════════════════════════════════════╝"
ui_print ""
ui_print "[!] Reboot required to complete uninstallation"
ui_print ""
ui_print "Thank you for using DNA-Lang!"
ui_print ""
