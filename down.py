from transformers import AutoModelForCausalLM, AutoTokenizer
import os

# Specify the model to download and the save path
MODEL_NAME = "EleutherAI/gpt-neo-125M"  # Smaller model to fit within Codespace limits
MODEL_PATH = "./models/gpt-neo-125M"

# Ensure the model path exists
os.makedirs(MODEL_PATH, exist_ok=True)

print(f"Downloading model: {MODEL_NAME}")
# Download and save the tokenizer
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
tokenizer.save_pretrained(MODEL_PATH)

# Download and save the model
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)
model.save_pretrained(MODEL_PATH)

print(f"Model downloaded and saved to: {MODEL_PATH}")
