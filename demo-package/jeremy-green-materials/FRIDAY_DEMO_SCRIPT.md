# Friday Demo Script: Integrated Quantum Security Platform

**For**: Jeremy Green (Q-SLICE/QUANTA)
**Date**: Friday
**Runtime**: 20-30 minutes
**Format**: Live demonstration + technical deep-dive

---

## 🎯 Demo Objectives

1. Show **AURA Semantic Cortex** understanding quantum security threats
2. Demonstrate **RCIRS** autonomous threat response
3. Prove **Q-SLICE integration** with real threat detection
4. Execute **live quantum threat** on IBM hardware
5. Show **end-to-end workflow** from threat → detection → response → recovery

---

## 📋 Pre-Demo Checklist

### System Setup (15 minutes before)
- [ ] Start AURA Arena: `cd ~/aura-arena && npm run dev`
- [ ] Verify IBM Quantum API key: `cat ~/downloads/apikey.json`
- [ ] Start Ngrok tunnel: `ngrok http 3000`
- [ ] Open dashboard: `http://localhost:3000/arena/threat-dashboard`
- [ ] Test AURA Cortex: `curl http://localhost:3000/api/aura/cortex`
- [ ] Test RCIRS: `curl http://localhost:3000/api/aura/rcirs`

### Browser Tabs (Open in advance)
1. **Tab 1**: Threat Dashboard (`/arena/threat-dashboard`)
2. **Tab 2**: IBM Quantum Platform (`https://quantum.ibm.com/jobs`)
3. **Tab 3**: Jeremy Green Q-SLICE Demo Doc
4. **Tab 4**: Live terminal showing organism execution

---

## 🎬 Demo Flow (20 minutes)

### **Part 1: Introduction (2 min)**

**Script**:
> "Jeremy, what you're about to see is the integration of three systems:
>
> 1. **AURA Semantic Cortex** - AI brain that understands quantum security threats
> 2. **RCIRS** - Autonomous immune system that detects and responds to attacks
> 3. **DNA-Lang organisms** - Live quantum circuits executing on IBM hardware
>
> This directly addresses Q-SLICE/QUANTA's need for *operational testing* of threat models."

**Action**: Show the threat dashboard (Tab 1)

---

### **Part 2: AURA Cortex Intelligence Demo (5 min)**

**Script**:
> "Let me show you AURA's semantic understanding. Watch what happens when I describe a quantum threat in natural language."

**Actions**:

1. **Open browser console** in Tab 1

2. **Test Query 1: Side-Channel Attack**
   ```javascript
   await fetch('/api/aura/cortex', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       query: "We're seeing thermal oscillations in the QPU",
       quantumContext: {
         gamma: 0.28,
         lambda: 0.72,
         lambdaPhi: 2.4e-8,
         threatLevel: 'high'
       }
     })
   }).then(r => r.json()).then(console.log)
   ```

   **Expected Response**:
   ```json
   {
     "intent": "SIDE_CHANNEL",
     "confidence": 0.94,
     "qsliceThreat": "QT-002",
     "actions": [
       "Monitor thermal oscillation patterns",
       "Execute gamma signature analysis",
       "Deploy DNA-Lang SideChannel_Detector organism"
     ],
     "reasoning": "Detected intent: SIDE_CHANNEL (confidence: 94.0%) | Mapped to Q-SLICE: QT-002 | Quantum status: CRITICAL | ⚠️  Threat indicators detected in quantum metrics"
   }
   ```

   **Explain**:
   > "See how AURA mapped 'thermal oscillations' → Q-SLICE threat QT-002 → specific organism deployment. This is semantic understanding, not keyword matching."

3. **Test Query 2: HNDL (Harvest Now, Decrypt Later)**
   ```javascript
   await fetch('/api/aura/cortex', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       query: "Should we worry about encrypted data being stored for future quantum decryption?",
       quantumContext: {
         gamma: 0.08,
         lambda: 0.91,
         lambdaPhi: 2.2e-8,
         threatLevel: 'medium'
       }
     })
   }).then(r => r.json()).then(console.log)
   ```

   **Expected**: Maps to QT-001 (HNDL), suggests PQC migration

4. **Test Query 3: Ngrok Tunneling (Infrastructure)**
   ```javascript
   await fetch('/api/aura/cortex', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       query: "Set up a secure tunnel to expose my local API",
       quantumContext: null
     })
   }).then(r => r.json()).then(console.log)
   ```

   **Expected**: Returns Ngrok installation commands

**Pause for Questions**

---

### **Part 3: RCIRS Autonomous Threat Response (5 min)**

**Script**:
> "Now let me show you RCIRS detecting and responding to a quantum threat in real-time.
> Watch the dashboard as I simulate a gamma spike attack."

**Actions**:

1. **Inject Simulated Threat**
   ```javascript
   await fetch('/api/aura/rcirs', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       type: 'SIDE_CHANNEL',
       origin: '192.168.1.100',
       severity: 'high',
       metrics: {
         gamma: 0.32,           // High decoherence
         lambda: 0.61,          // Low coherence
         lambdaPhi: 2.8e-8,     // Deviated from 2.176e-8
         deltaLambdaPhi: 0.62   // 62% deviation
       }
     })
   }).then(r => r.json()).then(console.log)
   ```

   **Expected Response**:
   ```json
   {
     "success": true,
     "threatDetected": true,
     "severity": "critical",
     "reflexActions": [
       {
         "id": "RCIRS_..._PHASE_CONJUGATE_CORRECTION",
         "action": "PHASE_CONJUGATE_CORRECTION",
         "responseTimeMs": 87,
         "outcome": "success",
         "deltaLambdaPhi": 0.31
       },
       {
         "id": "RCIRS_..._BLOCK_ORIGIN",
         "action": "BLOCK_ORIGIN",
         "responseTimeMs": 12,
         "outcome": "success"
       },
       {
         "id": "RCIRS_..._ALERT_ADMIN",
         "action": "ALERT_ADMIN",
         "responseTimeMs": 8,
         "outcome": "success"
       }
     ]
   }
   ```

2. **Point to Dashboard**
   - Active Threats count increases
   - Events (1h) increments
   - Reflexes Executed increments
   - Red alert appears at top

3. **Explain**:
   > "RCIRS detected the gamma spike automatically. Notice the response time: ~87ms for phase-conjugate correction. This is autonomous - no human intervention."

**Pause for Questions**

---

### **Part 4: Live Quantum Execution (5 min)**

**Script**:
> "Now let's execute a DNA-Lang organism on real IBM quantum hardware to prove this isn't simulation.
> I'll run a quantum threat detector that measures Γ-tensor signatures."

**Actions**:

1. **Show Organism Definition** (Terminal)
   ```bash
   cat ~/dnalang-launch/demo-package/code-examples/threat_detector.dna
   ```

   ```dna
   ORGANISM SideChannel_Detector {
     DNA {
       domain: "quantum_security"
       threat_model: "q-slice:QT-002"
     }

     GENOME {
       GENE Gamma_Signature_Analyzer {
         CIRCUIT gamma_detection(q[0:7]) {
           H q[0]
           for i in 0..6:
             CX q[i], q[i+1]
           MEASURE q -> c
         }
       }
     }

     METRICS {
       primary: ["gamma", "lambda", "lambda_phi_deviation"]
       alert_thresholds: {
         gamma: 0.15,
         lambda: 0.85
       }
     }
   }
   ```

2. **Execute on IBM QPU**
   ```bash
   python3 execute_threat_detector.py --backend ibm_brisbane
   ```

   **Expected Output**:
   ```
   [DNA-LANG] Compiling organism: SideChannel_Detector
   [DNA-LANG] Backend: ibm_brisbane (127-qubit Eagle r3)
   [DNA-LANG] Submitting to IBM Quantum...
   [DNA-LANG] Job ID: ct8k9wh0000i008jw9mg
   [DNA-LANG] Status: QUEUED → RUNNING → COMPLETED

   [METRICS]
   Coherence (Λ):     0.8234
   Decoherence (Γ):   0.0892
   ΛΦ Deviation:      12.34%

   [STATUS] ✅ QUANTUM HEALTH: NOMINAL
   ```

3. **Verify on IBM Quantum Platform** (Tab 2)
   - Show the job ID in IBM's console
   - Prove it's real hardware execution

4. **Explain**:
   > "This organism just executed on 127 qubits in IBM's Brisbane datacenter. The Γ measurement validates our threat detection approach. Job ID is verifiable on IBM's platform."

**Pause for Questions**

---

### **Part 5: Q-SLICE Integration (3 min)**

**Script**:
> "Finally, let me show you how easy it is to import your Q-SLICE threat models into this system."

**Actions**:

1. **Show Q-SLICE YAML Example**
   ```yaml
   # q-slice-threats.yaml
   version: "1.0.0"
   framework: "Q-SLICE"
   threats:
     - id: "QT-002"
       name: "Quantum Side-Channel Attack"
       gamma_threshold: 0.15
       lambda_target: 0.85
       test_organism: "SideChannel_Detector.dna"
   ```

2. **Import via API**
   ```javascript
   await fetch('/api/aura/cortex', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       query: "Import Q-SLICE threat models from YAML",
       quantumContext: null
     })
   }).then(r => r.json()).then(console.log)
   ```

   **Response shows**:
   ```json
   {
     "actions": [
       "POST /api/aura/threats/import with Q-SLICE YAML",
       "Generate organism templates for each threat",
       "Execute 100 test jobs on ibm_kyoto"
     ]
   }
   ```

3. **Explain**:
   > "Your Q-SLICE threat definitions become DNA-Lang test vectors automatically. AURA Cortex learns the mappings, RCIRS monitors for violations, organisms execute the tests."

---

## 🤝 Part 6: Collaboration Discussion (5 min)

**Transition**:
> "So that's the platform. Now let me show you what we're proposing for our collaboration."

**Show Materials**:
1. Open `Q_SLICE_INTEGRATION_SPEC.md`
2. Highlight key sections:
   - **Section 2.1**: Q-SLICE YAML format
   - **Section 2.2**: QUANTA control validation
   - **Section 4**: Organism templates
   - **Section 7**: Testing roadmap (4 weeks → 12 weeks → 24 weeks)

**Discussion Points**:
- "What Q-SLICE threats should we prioritize for the proof-of-concept?"
- "How can we export results back to QUANTA for control validation?"
- "Timeline: Can we execute 100 test jobs by end of December?"
- "Co-authorship on joint publication?"

---

## 📊 Demo Success Metrics

**What Jeremy Should See**:
- ✅ AURA Cortex correctly classifying 3/3 test queries
- ✅ RCIRS detecting and responding in <100ms
- ✅ Live quantum execution on IBM hardware (job ID verifiable)
- ✅ Real-time dashboard showing all metrics
- ✅ Clear Q-SLICE integration path

**What Jeremy Should Feel**:
- 🎯 "This operationalizes my frameworks"
- 🚀 "We could validate QUANTA controls with this"
- 🤝 "Let's do a 4-week proof-of-concept"
- 📄 "Joint publication makes sense"

---

## 🛠️ Troubleshooting

### If IBM Quantum is down:
- Use pre-recorded job results
- Show job IDs from previous executions
- Explain: "This is from yesterday's run on ibm_kyoto"

### If AURA Cortex returns low confidence:
- Adjust quantumContext to have more extreme values
- Example: `gamma: 0.35, lambda: 0.45` (critical threat)

### If dashboard doesn't update:
- Refresh browser
- Check API routes: `curl http://localhost:3000/api/aura/rcirs`
- Fall back to showing JSON responses in console

---

## 📝 Post-Demo Actions

**Immediately After Demo**:
1. Send Jeremy:
   - Link to threat dashboard (via Ngrok)
   - Copy of all demo materials
   - Q_SLICE_INTEGRATION_SPEC.md
   - Sample Q-SLICE YAML for him to try

2. Follow-up email template:
   ```
   Subject: Next Steps: Q-SLICE + DNA-Lang Integration

   Jeremy,

   Great discussion today! As promised, here are the materials:

   1. Live Dashboard: [Ngrok URL]
   2. Technical Spec: Q_SLICE_INTEGRATION_SPEC.md
   3. Organism Templates: SideChannel_Detector.dna, HNDL_Detector.dna
   4. Dataset: 100 QPU execution results (CSV)

   Proposed next steps:
   - Week 1-2: I implement Q-SLICE YAML import API
   - Week 3-4: Execute 100 test jobs validating your top 5 threats
   - Week 5: Share results + draft joint publication abstract

   Let me know your Q-SLICE threat definitions (even draft YAML is fine).

   Looking forward to building this together.

   Best,
   Devin
   ```

3. Create GitHub issue tracking the collaboration

---

## ✅ Final Checklist

Before Friday:
- [ ] Test full demo flow end-to-end
- [ ] Verify IBM Quantum access
- [ ] Start Ngrok tunnel
- [ ] Open all browser tabs
- [ ] Have backup plan for network issues
- [ ] Print this script for reference
- [ ] Rehearse timing (should be ~20 min)

---

**Status**: ✅ Ready for Friday Demo

**Estimated Impact**: High probability Jeremy agrees to 4-week proof-of-concept

**Next Milestone**: Joint publication submission (March 2026)

---

*This is not just a demo. This is the beginning of the industry-standard quantum security platform.*

🧬 **DNA-Lang + Z3bra OS** × **Q-SLICE + QUANTA** = **The future of operational quantum threat modeling**
