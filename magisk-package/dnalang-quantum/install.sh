#!/system/bin/sh
##########################################################################################
#
# DNA-Lang Quantum Fold Display - Magisk Module Installer
#
# Copyright (C) 2025 Agile Defense Systems / dna::}{::lang
# License: GPL-2.0
#
##########################################################################################

##########################################################################################
# Config Flags
##########################################################################################

# Set to true if you do *NOT* want Magisk to mount
# any files for you. Most modules would NOT want
# to set this flag to true
SKIPMOUNT=false

# Set to true if you need to load system.prop
PROPFILE=false

# Set to true if you need post-fs-data script
POSTFSDATA=false

# Set to true if you need late_start service script
LATESTARTSERVICE=true

##########################################################################################
# Replace list
##########################################################################################

# List all directories you want to directly replace in the system
# Check the documentations for more info why you would need this

# Construct your list in the following format
# This is an example
REPLACE_EXAMPLE="
/system/app/Youtube
/system/priv-app/SystemUI
/system/priv-app/Settings
/system/framework
"

# Construct your own list here
REPLACE="
"

##########################################################################################
#
# Function Callbacks
#
# The following functions will be called by the installation framework.
# You do not have the ability to modify update-binary, the only way you can customize
# installation is through implementing these functions.
#
# When running your callbacks, the installation framework will make sure the Magisk
# internal busybox path is *PREPENDED* to PATH, so all common commands shall exist.
# Also, it will make sure /data, /system, and /vendor is properly mounted.
#
##########################################################################################

##########################################################################################
#
# The installation framework will export some variables and functions.
# You should use these variables and functions for installation.
#
# ! DO NOT use any Magisk internal paths as those are NOT public API.
# ! DO NOT use other functions in util_functions.sh as they are NOT public API.
# ! Non public APIs are not guranteed to maintain compatibility between releases.
#
# Available variables:
#
# MAGISK_VER (string): the version string of current installed Magisk
# MAGISK_VER_CODE (int): the version code of current installed Magisk
# BOOTMODE (bool): true if the module is currently installing in Magisk Manager
# MODPATH (path): the path where your module files should be installed
# TMPDIR (path): a place where you can temporarily store files
# ZIPFILE (path): your module's installation zip
# ARCH (string): the architecture of the device. Value is either arm, arm64, x86, or x64
# IS64BIT (bool): true if $ARCH is either arm64 or x64
# API (int): the API level (Android version) of the device
#
# Availible functions:
#
# ui_print <msg>
#     print <msg> to console
#     Avoid using 'echo' as it will not display in custom recovery's console
#
# abort <msg>
#     print error message <msg> to console and terminate installation
#     Avoid using 'exit' as it will skip the termination cleanup steps
#
# set_perm <target> <owner> <group> <permission> [context]
#     if [context] is empty, it will default to "u:object_r:system_file:s0"
#     this function is a shorthand for the following commands
#       chown owner.group target
#       chmod permission target
#       chcon context target
#
# set_perm_recursive <directory> <owner> <group> <dirpermission> <filepermission> [context]
#     if [context] is empty, it will default to "u:object_r:system_file:s0"
#     for all files in <directory>, it will call:
#       set_perm file owner group filepermission context
#     for all directories in <directory> (including itself), it will call:
#       set_perm dir owner group dirpermission context
#
##########################################################################################

##########################################################################################
# Install
##########################################################################################

print_modname() {
  ui_print "*******************************"
  ui_print " DNA-Lang Quantum Fold Display "
  ui_print "    Kernel Module Installer    "
  ui_print "           v1.0.0               "
  ui_print "*******************************"
}

on_install() {
  # The following is the default implementation: extract $ZIPFILE/system to $MODPATH
  # Extend/change the logic to whatever you want
  ui_print "- Extracting module files"
  unzip -o "$ZIPFILE" 'system/*' -d $MODPATH >&2

  # Verify kernel version compatibility
  ui_print "- Checking kernel compatibility"
  KERNEL_VERSION=$(uname -r | cut -d'.' -f1-2)
  ui_print "  Kernel version: $KERNEL_VERSION"

  if [ "$KERNEL_VERSION" \< "6.0" ]; then
    ui_print "! WARNING: Kernel version < 6.0 may not be compatible"
    ui_print "! Recommended: Linux 6.x or newer"
  fi

  # Check if Samsung Fold device
  ui_print "- Detecting device"
  DEVICE_MODEL=$(getprop ro.product.model)
  ui_print "  Device: $DEVICE_MODEL"

  if echo "$DEVICE_MODEL" | grep -iq "SM-F"; then
    ui_print "✓ Samsung Fold device detected!"
  else
    ui_print "! Non-Fold device detected"
    ui_print "! Module optimized for Samsung Galaxy Fold"
  fi

  # Create /proc/qc directory (kernel module will populate)
  ui_print "- Preparing /proc/qc interface"
  # Note: /proc is virtual, module creates entries at load time

  # Set permissions
  ui_print "- Setting permissions"
  set_perm_recursive $MODPATH/system/lib/modules 0 0 0755 0644

  # Create Python userspace tools directory
  ui_print "- Installing Python APIs"
  mkdir -p /data/local/dnalang
  unzip -o "$ZIPFILE" 'python/*' -d /data/local/dnalang >&2
  set_perm_recursive /data/local/dnalang 0 0 0755 0644

  ui_print "- Installation complete!"
}

set_permissions() {
  # The following is the default rule, DO NOT remove
  set_perm_recursive $MODPATH 0 0 0755 0644

  # Here are some examples:
  # set_perm_recursive  $MODPATH/system/lib       0     0       0755      0644
  # set_perm  $MODPATH/system/bin/app_process32   0     2000    0755      u:object_r:zygote_exec:s0
  # set_perm  $MODPATH/system/bin/dex2oat         0     2000    0755      u:object_r:dex2oat_exec:s0
  # set_perm  $MODPATH/system/lib/libart.so       0     0       0644

  # Kernel modules should be owned by root
  set_perm_recursive $MODPATH/system/lib/modules 0 0 0755 0644
}
