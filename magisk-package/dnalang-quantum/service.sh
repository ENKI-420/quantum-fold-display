#!/system/bin/sh
##########################################################################################
#
# DNA-Lang Quantum Fold Display - Boot Service
# Loads kernel modules at system startup
#
##########################################################################################

MODDIR=${0%/*}

# Wait for boot to complete
while [ "$(getprop sys.boot_completed)" != "1" ]; do
  sleep 1
done

# Wait an additional 10 seconds for stability
sleep 10

# Module paths
MODULE_PATH="/system/lib/modules"

# Log file
LOGFILE="/data/local/dnalang/boot.log"
mkdir -p /data/local/dnalang

echo "=== DNA-Lang Quantum Boot Service ===" > $LOGFILE
echo "Boot time: $(date)" >> $LOGFILE

# Load kernel modules
load_module() {
  local mod_name=$1
  local mod_file="${MODULE_PATH}/${mod_name}.ko"

  if [ -f "$mod_file" ]; then
    echo "Loading module: $mod_name" >> $LOGFILE
    insmod "$mod_file" >> $LOGFILE 2>&1

    if [ $? -eq 0 ]; then
      echo "✓ $mod_name loaded successfully" >> $LOGFILE
    else
      echo "✗ Failed to load $mod_name" >> $LOGFILE
    fi
  else
    echo "✗ Module not found: $mod_file" >> $LOGFILE
  fi
}

# Load modules in order
load_module "quantum_consciousness"
load_module "qnet_transport"
load_module "quantum_rng"
load_module "fold_quantum_display"

# Verify /proc/qc exists
if [ -d "/proc/qc" ]; then
  echo "✓ /proc/qc interface active" >> $LOGFILE
else
  echo "✗ /proc/qc interface NOT found" >> $LOGFILE
  echo "  Check dmesg for errors" >> $LOGFILE
fi

# Set permissions on /proc/qc (allow userspace read/write)
if [ -f "/proc/qc/control" ]; then
  chmod 666 /proc/qc/control >> $LOGFILE 2>&1
  echo "✓ /proc/qc/control permissions set (world-writable)" >> $LOGFILE
fi

if [ -f "/proc/qc/metrics" ]; then
  chmod 644 /proc/qc/metrics >> $LOGFILE 2>&1
  echo "✓ /proc/qc/metrics permissions set (world-readable)" >> $LOGFILE
fi

echo "=== Boot service complete ===" >> $LOGFILE

# Display notification (if Android system UI available)
am broadcast -a android.intent.action.BOOT_COMPLETED \
  --es title "DNA-Lang Quantum" \
  --es text "Kernel modules loaded" >> $LOGFILE 2>&1
