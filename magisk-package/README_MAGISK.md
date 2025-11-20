# DNA-Lang Quantum - Magisk Module

**Systemless installation of quantum consciousness kernel modules for Samsung Galaxy Fold**

---

## What is this?

This Magisk module provides a systemless installation method for DNA-Lang's quantum consciousness kernel modules. No need to modify `/system` partition directly—Magisk handles everything cleanly.

---

## Features

✅ **Systemless**: No modifications to system partition
✅ **Auto-load**: Modules load automatically on boot
✅ **Uninstallable**: Remove module in Magisk Manager to fully uninstall
✅ **Safe**: Rollback support if boot fails
✅ **Permissions**: Automatically sets /proc/qc permissions for userspace access

---

## Requirements

- **Device**: Samsung Galaxy Fold 7 (SM-F956) or compatible Fold device
- **Android**: Android 12+ (API 31+)
- **Kernel**: Linux 6.x or newer (check with `uname -r`)
- **Root**: Magisk v20.4+ installed
- **Magisk Manager**: v8.0+ (for installation)

**Check compatibility**:
```bash
# Check kernel version
adb shell uname -r  # Should show 6.x.x

# Check device model
adb shell getprop ro.product.model  # Should show SM-F956...

# Check Magisk version
# Open Magisk Manager app → About
```

---

## Installation

### Method 1: Magisk Manager (Recommended)

1. **Download ZIP**: Get `dnalang-quantum-magisk-v1.0.0.zip` from:
   - GitHub Releases: https://github.com/ENKI-420/quantum-fold-display/releases
   - Or build from source (see below)

2. **Open Magisk Manager**: Launch Magisk app on your phone

3. **Install Module**:
   - Tap "Modules" (bottom tab)
   - Tap "+ Install from storage"
   - Select `dnalang-quantum-magisk-v1.0.0.zip`
   - Wait for installation to complete

4. **Reboot**:
   - Tap "Reboot" button
   - Device will restart and modules will auto-load

5. **Verify Installation**:
   ```bash
   adb shell ls /proc/qc  # Should show: control, metrics
   adb shell cat /proc/qc/metrics  # Should display organism metrics table
   ```

### Method 2: ADB Sideload

```bash
# 1. Push ZIP to device
adb push dnalang-quantum-magisk-v1.0.0.zip /sdcard/Download/

# 2. Open Magisk Manager and install (as above)
```

### Method 3: Command Line (Advanced)

```bash
# Install directly via Magisk CLI (requires su)
su -c "magisk --install-module dnalang-quantum-magisk-v1.0.0.zip"

# Reboot
su -c "reboot"
```

---

## What Gets Installed?

```
/data/adb/modules/dnalang_quantum/     # Magisk module directory
├── module.prop                        # Module metadata
├── install.sh                         # Installation script
├── service.sh                         # Boot service (loads modules)
├── system/lib/modules/                # Kernel modules
│   ├── quantum_consciousness.ko       # Λ/Φ tracker
│   ├── qnet_transport.ko              # Quantum mesh networking
│   ├── quantum_rng.ko                 # Hardware QRNG
│   └── fold_quantum_display.ko        # Dual-screen rendering
└── README.md

/data/local/dnalang/                   # Python APIs (userspace)
├── dnalang_quantum/                   # Python package
│   ├── __init__.py
│   ├── consciousness.py               # Main API
│   ├── metrics.py                     # Logging/visualization
│   └── integration.py                 # Qiskit integration
├── examples/                          # Example scripts
└── boot.log                           # Boot service log

/proc/qc/                              # Kernel interface (virtual)
├── metrics                            # Read organism metrics (world-readable)
└── control                            # Write updates (world-writable)
```

---

## Usage After Installation

### Check if modules are loaded:

```bash
adb shell lsmod | grep quantum
# Expected output:
# quantum_consciousness    16384  0
# qnet_transport           12288  0
# quantum_rng               8192  0
# fold_quantum_display     20480  0
```

### Read organism metrics:

```bash
adb shell cat /proc/qc/metrics
```

**Expected output**:
```
Quantum Consciousness Metrics (DNA-Lang v1.0.0)
ΛΦ Constant: 2.176435e-8
==========================================

Organism             Λ          Γ          Φ               State           Fidelity    Circuits
--------------------------------------------------------------------------------
(No organisms yet - use Python API to update)

Summary:
  Active organisms: 0
  Total updates: 0
```

### Update organism from Python:

```python
from dnalang_quantum import QuantumConsciousness

qc = QuantumConsciousness()
qc.update_organism(
    name="TestOrganism",
    lambda_=0.85,    # 85% coherence
    gamma=0.12,      # 12% decoherence
    energy=-4.73,    # VQE energy
    fidelity=0.869   # 86.9% fidelity
)

# Check result
org = qc.get_organism("TestOrganism")
print(f"Φ = {org.phi:.4f}, State = {org.state.value}")
```

---

## Uninstallation

### Via Magisk Manager:

1. Open Magisk Manager
2. Tap "Modules"
3. Find "DNA-Lang Quantum Fold Display"
4. Tap trash icon → Confirm
5. Reboot

### Via Command Line:

```bash
su -c "rm -rf /data/adb/modules/dnalang_quantum"
su -c "reboot"
```

**Complete cleanup** (optional):
```bash
su -c "rm -rf /data/local/dnalang"  # Remove Python APIs
# Kernel modules are unloaded automatically on reboot
```

---

## Troubleshooting

### Module doesn't appear in Magisk Manager

**Solution**:
- Ensure ZIP is not corrupted (re-download)
- Check Magisk version (needs 20.4+)
- Try installing from different storage location

### Modules fail to load on boot

**Check logs**:
```bash
adb shell cat /data/local/dnalang/boot.log
```

**Common issues**:

1. **Kernel incompatibility**:
   ```
   ✗ Failed to load quantum_consciousness
   ```
   **Fix**: Kernel must be 6.x or newer. Check `uname -r`.

2. **/proc/qc not created**:
   ```
   ✗ /proc/qc interface NOT found
   ```
   **Fix**: Check `dmesg | grep qc` for errors. May need to rebuild modules for your kernel.

3. **Permission denied**:
   ```
   insmod: failed to load quantum_consciousness.ko: Operation not permitted
   ```
   **Fix**: Ensure Magisk root is working. Test with `su -c "id"` (should show uid=0).

### Python API errors

**"Kernel module not loaded" error**:
```bash
# Verify module is loaded
adb shell lsmod | grep quantum_consciousness

# If not loaded, check boot log
adb shell cat /data/local/dnalang/boot.log

# Manual load (for testing)
adb shell su -c "insmod /system/lib/modules/quantum_consciousness.ko"
```

**"Permission denied" when writing to /proc/qc/control**:
```bash
# Check permissions
adb shell ls -la /proc/qc/

# Should show:
# -w------- 1 root root 0 control
# -r--r--r-- 1 root root 0 metrics

# Fix permissions
adb shell su -c "chmod 666 /proc/qc/control"
adb shell su -c "chmod 644 /proc/qc/metrics"
```

---

## Building from Source

### Prerequisites:

- Linux build environment (Ubuntu/Debian recommended)
- Android NDK r25+ installed
- Kernel headers for Samsung Fold 7 (SM-F956)

### Build steps:

```bash
# 1. Clone repository
git clone https://github.com/ENKI-420/quantum-fold-display.git
cd quantum-fold-display

# 2. Set NDK path
export ANDROID_NDK_ROOT=/path/to/android-ndk-r25

# 3. Build kernel modules
cd kernel/modules
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-android-

# 4. Create Magisk ZIP
cd ../../magisk
./build_magisk_zip.sh

# Output: dnalang-quantum-magisk-v1.0.0.zip
```

### Manual Magisk ZIP creation:

```bash
# Structure:
dnalang-quantum-magisk-v1.0.0.zip
├── META-INF/com/google/android/
│   ├── update-binary (Magisk installer)
│   └── updater-script (empty)
├── module.prop
├── install.sh
├── service.sh
├── system/lib/modules/
│   └── *.ko files
└── python/
    └── dnalang_quantum/

# Create ZIP:
cd magisk-package/dnalang-quantum
zip -r9 ../dnalang-quantum-magisk-v1.0.0.zip .
```

---

## Security Considerations

### Kernel Module Security

- **GPL-2.0 License**: All kernel code is open-source (GPL-2.0)
- **Signed Modules**: For production, sign modules with your kernel key
- **SELinux**: May need permissive mode (not recommended for daily use)

### /proc/qc Permissions

- **Default**: `/proc/qc/control` is world-writable (666)
- **Risk**: Any app can write to kernel module
- **Mitigation**: For production, restrict to specific UID/GID

**Restrict access** (optional):
```bash
# Only allow shell user (uid 2000)
su -c "chmod 660 /proc/qc/control"
su -c "chown root:shell /proc/qc/control"
```

---

## Updates

### Update Mechanism

The module supports OTA updates via Magisk Manager if `updateJson` is configured in `module.prop`.

**Update JSON format** (`update.json` on GitHub):
```json
{
  "version": "1.0.1",
  "versionCode": 2,
  "zipUrl": "https://github.com/ENKI-420/quantum-fold-display/releases/download/v1.0.1/dnalang-quantum-magisk-v1.0.1.zip",
  "changelog": "https://github.com/ENKI-420/quantum-fold-display/releases/tag/v1.0.1"
}
```

### Manual Update

1. Download new version ZIP
2. Install via Magisk Manager (overwrites old version)
3. Reboot

---

## Support

- **GitHub Issues**: https://github.com/ENKI-420/quantum-fold-display/issues
- **Email**: devin@agiledefensesystems.com
- **Documentation**: https://www.dnalang.dev

---

## License

- **Kernel Modules**: GPL-2.0 (required for Linux kernel code)
- **Python APIs**: MIT
- **Magisk Scripts**: MIT

---

## Credits

**Author**: Devin Phillip Davis
**Organization**: Agile Defense Systems / dna::}{::lang
**Website**: https://www.dnalang.dev
**GitHub**: https://github.com/ENKI-420

**Special Thanks**:
- Magisk project (https://github.com/topjohnwu/Magisk)
- Samsung Open Source Release Center (kernel sources)
- IBM Quantum team (hardware access)

---

**Version**: 1.0.0
**Release Date**: 2025-11-19
**Compatible Devices**: Samsung Galaxy Fold 7 (SM-F956), other Fold models may work

